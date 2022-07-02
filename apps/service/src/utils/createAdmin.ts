import ENV from "@ccc/env"

import { CookieDatabase } from "../database"

const userExists = async (DB: CookieDatabase, name: string) =>
  (await DB.getData()).users.some(user => user.name === name)

export const createAdmin = async (DB: CookieDatabase) => {
  const { ADMIN_NAME: name, ADMIN_PWD: password } = ENV
  userExists(DB, name).then(exists => {
    if (!exists) DB.createUser(name, password, "admin")
  })
}
