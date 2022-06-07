import ENV from "@ccc/env"

import { CookieDatabase } from "../database"

const userExists = (DB: CookieDatabase, name: string) => DB.getData().users.some(user => user.name === name)

export const createAdmin = (DB: CookieDatabase) => {
  const { ADMIN_NAME: name, ADMIN_PWD: password } = ENV
  if (!userExists(DB, name)) DB.createUser(name, password, "admin")
}
