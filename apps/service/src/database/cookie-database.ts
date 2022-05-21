import { Database } from "@ccc/database"
import ENV from "@ccc/env"
import Password from "@ccc/password"

import { errors } from "../utils/errors"
import { CookieDatabaseDefinition } from "./types"
import { UserContext } from "./user-context"

const defaultValue: CookieDatabaseDefinition = {
  users: [],
  cookies: [],
}

export class CookieDatabase {
  private static _instance: CookieDatabase
  private readonly DB: Database<CookieDatabaseDefinition>

  constructor(directory: string) {
    if (CookieDatabase._instance) {
      throw new Error("CookieDatabase is a singleton")
    }
    const options = {
      directory,
      salt: ENV.DB_SECRET,
    }
    this.DB = new Database(defaultValue, options)
  }

  private getUserTable() {
    return this.DB.getTable("users")
  }

  private getCookieTable() {
    return this.DB.getTable("cookies")
  }

  public getData() {
    return {
      cookies: this.getCookieTable().getData(),
      users: this.getUserTable().getData(),
    }
  }

  public createUser(name: string, password: string) {
    const user = this.getUserTable().findOne("name", name)
    if (user) throw errors.NAME_ALREADY_EXISTS
    if (!Password.validate(password)) throw errors.PASSWORD_NOT_VALID
    const { id } = this.getUserTable().create({
      name,
      password: Password.encrypt(name, password, ENV.PWD_SECRET),
      role: "user",
    })
    return id
  }

  public deleteUser(name: string) {
    const user = this.getUserTable().findOne("name", name)
    if (!user) throw errors.USER_NOT_FOUND
    this.getCookieTable().deleteAll("creditor", user.id)
    this.getCookieTable().deleteAll("debtor", user.id)
    this.getUserTable().delete(user.id)
  }

  public validateCredentials(name: string, password: string) {
    const user = this.getUserTable().findOne("name", name)
    if (!user) return false
    const isValid =
      user.password === Password.encrypt(name, password, ENV.PWD_SECRET)
    return isValid ? user.id : false
  }

  public getUserById(id: string) {
    const user = this.getUserTable().findById(id)
    if (!user) return null
    return new UserContext(this.DB, user)
  }
}
