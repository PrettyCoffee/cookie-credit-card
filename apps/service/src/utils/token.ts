import { TokenPayload } from "@ccc/api-definition"
import ENV from "@ccc/env"
import { verify, sign, Algorithm } from "jsonwebtoken"

import {
  validateRequestBody,
  RequestBodyValidation,
} from "./validateRequestBody"

const TokenValidation: RequestBodyValidation<TokenPayload> = {
  id: { type: "string", required: true },
  name: { type: "string", required: true },
  role: { type: "string", required: true },
}

const expiresIn = "1d"
const algorithms: Algorithm[] = ["HS256"]

const signToken = (payload: TokenPayload) =>
  "Bearer " +
  sign(payload, ENV.JWT_SECRET, { expiresIn, algorithm: algorithms[0] })

const verifyToken = (token?: string) => {
  if (!token) return null
  const payload = verify(token, ENV.JWT_SECRET, { algorithms })
  if (typeof payload === "string") return null
  const validatedPayload = validateRequestBody(payload, TokenValidation)
  return validatedPayload
}

export const Token = {
  sign: signToken,
  verify: verifyToken,
}
