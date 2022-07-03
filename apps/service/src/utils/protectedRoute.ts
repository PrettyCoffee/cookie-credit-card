import { RequestHandler } from "express"

import { errors } from "./errors"
import { Token } from "./token"

export const protectedRoute: RequestHandler = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]
  try {
    const payload = Token.verify(token)
    if (!payload) throw errors.BAD_REQUEST

    req.headers.token = payload as any
    const newToken = Token.sign(payload as any)
    res.setHeader("Authorization", newToken)
  } catch {
    throw errors.UNAUTHORIZED
  }
}
