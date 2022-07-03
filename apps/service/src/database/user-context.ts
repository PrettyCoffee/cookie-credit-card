import { PrismaClient, User } from "@prisma/client"

import { errors } from "../utils/errors"

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
    if (destName === this.user.name) throw errors.BAD_REQUEST
    const destUser = await this.prisma.user.findUnique({
      where: { name: destName },
    })
    if (!destUser) throw errors.USER_NOT_FOUND

    const debtQuery = {
      where: {
        debtorId_creditorId: {
          debtorId: this.user.id,
          creditorId: destUser.id,
        },
      },
    }

    const creditQuery = {
      where: {
        debtorId_creditorId: {
          creditorId: this.user.id,
          debtorId: destUser.id,
        },
      },
    }

    const existingDebts = await this.prisma.cookies.findUnique(debtQuery)
    const existingCredits = await this.prisma.cookies.findUnique(creditQuery)

    const currentAmount =
      (existingCredits?.amount || 0) - (existingDebts?.amount || 0)
    const newAmount = currentAmount + amount

    if (newAmount < 1 && existingCredits)
      this.prisma.cookies.delete(creditQuery).finally()
    else if (newAmount > -1 && existingDebts)
      this.prisma.cookies.delete(debtQuery).finally()

    if (newAmount < 0) {
      return this.prisma.cookies.upsert({
        ...debtQuery,
        update: { amount: newAmount * -1 },
        create: {
          ...debtQuery.where.debtorId_creditorId,
          amount: newAmount * -1,
        },
      })
    } else if (newAmount > 0) {
      return this.prisma.cookies.upsert({
        ...creditQuery,
        update: { amount: newAmount },
        create: {
          ...creditQuery.where.debtorId_creditorId,
          amount: newAmount,
        },
      })
    }
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
