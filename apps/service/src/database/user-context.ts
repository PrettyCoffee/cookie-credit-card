import { PrismaClient, User } from "@prisma/client"

import { errors } from "../utils/errors"

const getCookieQuery = (debtorId: string, creditorId: string) => ({
  where: {
    debtorId_creditorId: {
      debtorId,
      creditorId,
    },
  },
})

export class UserContext {
  private prisma: PrismaClient
  public user: User

  constructor(user: User, prisma: PrismaClient) {
    this.user = user
    this.prisma = prisma
  }

  public async getCookies() {
    const debts = (await this.getDebts()).map(({ amount, creditor }) => ({
      creditor: creditor.name,
      amount,
    }))
    const credits = (await this.getCredits()).map(({ amount, debtor }) => ({
      debtor: debtor.name,
      amount,
    }))
    return {
      debts,
      credits,
    }
  }

  public async transferCookies(destName: string, amount: number) {
    if (destName === this.user.name || amount < 1) throw errors.BAD_REQUEST
    const destUser = await this.prisma.user.findUnique({
      where: { name: destName },
    })
    if (!destUser) throw errors.USER_NOT_FOUND

    return this.getNewBalance(this.user, destUser, amount).then(newBalance => {
      if (newBalance < 1)
        return this.executeTransfer(this.user, destUser, newBalance * -1)
      else if (newBalance >= 1)
        return this.executeTransfer(destUser, this.user, newBalance)
    })
  }

  private async getNewBalance(debtor: User, creditor: User, amount: number) {
    const existingDebts = await this.prisma.cookies.findUnique(
      getCookieQuery(debtor.id, creditor.id)
    )
    const existingCredits = await this.prisma.cookies.findUnique(
      getCookieQuery(creditor.id, debtor.id)
    )

    const currentAmount =
      (existingCredits?.amount || 0) - (existingDebts?.amount || 0)
    const newBalance = currentAmount - amount

    if (newBalance < 1 && existingCredits)
      this.prisma.cookies
        .delete(getCookieQuery(creditor.id, debtor.id))
        .finally()

    return newBalance
  }

  private executeTransfer(debtor: User, creditor: User, amount: number) {
    return this.prisma.cookies.upsert({
      where: {
        debtorId_creditorId: {
          debtorId: debtor.id,
          creditorId: creditor.id,
        },
      },
      update: { amount },
      create: {
        debtorId: debtor.id,
        creditorId: creditor.id,
        amount: amount,
      },
    })
  }

  private getDebts(userId = this.user.id) {
    return this.prisma.cookies.findMany({
      where: { debtorId: userId },
      include: { creditor: true, debtor: true },
    })
  }

  private getCredits(userId = this.user.id) {
    return this.prisma.cookies.findMany({
      where: { creditorId: userId },
      include: { creditor: true, debtor: true },
    })
  }
}
