import { RequestHandler } from "express"

import { errors } from "./errors"
import { Token } from "./token"

export const protectedRoute: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]
  try {
    const payload = Token.verify(token)
    if (!payload || !payload.userId) throw errors.BAD_REQUEST

    req.headers.userId = payload.userId
    const newToken = Token.sign(payload)
    res.setHeader("Authorization", newToken)
  } catch {
    throw errors.UNAUTHORIZED
  }

  next()
}
