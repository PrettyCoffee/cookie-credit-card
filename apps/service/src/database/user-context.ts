import { Database } from "@ccc/database"

import { errors } from "../utils/errors"
import { CookieDatabaseDefinition, User } from "./types"

export class UserContext {
  private readonly DB: Database<CookieDatabaseDefinition>
  public user: User

  constructor(db: Database<CookieDatabaseDefinition>, user: User) {
    this.DB = db
    this.user = user
  }

  public getCookies() {
    const debts = this.getDebts(this.user.id)
    const credits = this.getCredit(this.user.id)
    return {
      debts,
      credits,
    }
  }

  public transferCookies(destName: string, amount: number) {
    if (destName === this.user.name) throw errors.BAD_REQUEST
    const destUser = this.getUserTable().findOne("name", destName)
    if (!destUser) throw errors.USER_NOT_FOUND
    const existingDebts = this.getCookieTable()
      .findAll("debtor", this.user.id)
      .find(({ creditor }) => creditor === destUser?.id)
    if (existingDebts) {
      const newAmount = (existingDebts.amount += amount)
      if (newAmount <= 0) this.getCookieTable().delete(existingDebts.id)
      this.getCookieTable().patch(existingDebts.id, "amount", newAmount)
    } else {
      if (amount <= 0) return
      this.getCookieTable().create({
        debtor: this.user.id,
        creditor: destUser.id,
        amount,
      })
    }
  }

  private getUserTable() {
    return this.DB.getTable("users")
  }

  private getCookieTable() {
    return this.DB.getTable("cookies")
  }

  private getDebts(userId: string) {
    const debts = this.getCookieTable().findAll("debtor", userId)
    return debts.map(({ amount, creditor }) => {
      const creditorUser = this.getUserTable().findById(creditor)
      if (!creditorUser) throw errors.USER_NOT_FOUND
      return { creditor: creditorUser.name, amount }
    })
  }

  private getCredit(userId: string) {
    const credits = this.getCookieTable().findAll("creditor", userId)
    return credits.map(({ amount, debtor }) => {
      const debtorUser = this.getUserTable().findById(debtor)
      if (!debtorUser) throw errors.USER_NOT_FOUND
      return { debtor: debtorUser.name, amount }
    })
  }
}
