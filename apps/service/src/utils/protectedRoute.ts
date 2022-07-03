import { Request, Response } from "express"

import { CookieDatabase } from "../database"
import { errors } from "./errors"
import { Token } from "./token"

export const protectedRoute = async (
  req: Request,
  res: Response,
  DB: CookieDatabase
) => {
  const token = req.headers.authorization?.split(" ")[1]
  try {
    const payload = Token.verify(token)
    if (!payload) throw errors.UNAUTHORIZED

    const user = await DB.getUserById(payload.id)
    if (!user) throw errors.UNAUTHORIZED

    req.headers.token = payload as any
    const newToken = Token.sign(payload as any)
    res.setHeader("Authorization", newToken)
  } catch {
    throw errors.UNAUTHORIZED
  }
}
