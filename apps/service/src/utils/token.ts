import { TokenPayload } from "@ccc/api-definition"
import ENV from "@ccc/env"
import { verify, sign, Algorithm } from "jsonwebtoken"

const expiresIn = "1d"
const algorithms: Algorithm[] = ["HS256"]

const signToken = (payload: TokenPayload) => {
  const rawPayload = {
    ...payload,
  }
  delete rawPayload.exp
  return (
    "Bearer " +
    sign(rawPayload, ENV.JWT_SECRET, { expiresIn, algorithm: algorithms[0] })
  )
}
const verifyToken = (token?: string) => {
  if (!token) return null
  const payload = verify(token, ENV.JWT_SECRET, { algorithms })
  if (typeof payload === "string") return null
  return payload
}

export const Token = {
  sign: signToken,
  verify: verifyToken,
}
