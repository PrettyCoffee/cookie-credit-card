import ENV from "@ccc/env"
import Password from "@ccc/password"
import { PrismaClient, Role } from "@prisma/client"

import { errors } from "../utils/errors"
import { UserContext } from "./user-context"

export class CookieDatabase {
  private static _instance: CookieDatabase
  private readonly prisma = new PrismaClient()

  constructor() {
    if (CookieDatabase._instance) {
      throw new Error("CookieDatabase is a singleton")
    }
  }

  public async getData() {
    return {
      cookies: await this.prisma.cookies.findMany(),
      users: await this.prisma.user.findMany(),
    }
  }

  public async createUser(name: string, password: string, role?: Role) {
    const existing = await this.prisma.user.findUnique({ where: { name } })
    if (existing) throw errors.NAME_ALREADY_EXISTS
    if (!Password.validate(password)) throw errors.PASSWORD_NOT_VALID
    const user = await this.prisma.user.create({
      data: {
        name,
        password: Password.encrypt(name, password, ENV.PWD_SECRET),
        role,
      },
    })
    return user
  }

  public async deleteUser(name: string) {
    const user = await this.prisma.user.findUnique({ where: { name } })
    if (!user) throw errors.USER_NOT_FOUND
    this.prisma.user.delete({ where: { name } })
  }

  public async validateCredentials(name: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { name } })
    if (!user) return false
    const isValid =
      user.password === Password.encrypt(name, password, ENV.PWD_SECRET)
    return isValid ? user : false
  }

  public async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) return null
    return new UserContext(user, this.prisma)
  }
}
