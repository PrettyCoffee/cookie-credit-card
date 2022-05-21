import ENV from "@ccc/env"
import { verify, sign, Algorithm } from "jsonwebtoken"

import { CustomPayload } from "../@types/jwt.d"

const expiresIn = "1d"
const algorithms: Algorithm[] = ["HS256"]

const signToken = (payload: CustomPayload) => {
  const { userId } = payload
  return (
    "Bearer " +
    sign({ userId }, ENV.JWT_SECRET, { expiresIn, algorithm: algorithms[0] })
  )
}
const verifyToken = (token?: string) => {
  if (!token) return null
  const payload = verify(token, ENV.JWT_SECRET, { algorithms })
  if (typeof payload === "string") return null
  return payload as CustomPayload
}

export const Token = {
  sign: signToken,
  verify: verifyToken,
}
