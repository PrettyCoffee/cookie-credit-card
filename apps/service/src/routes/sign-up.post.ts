import { signUpRoute, AuthRequest, AuthResponse } from "@ccc/api-definition"

import { Token } from "../utils/token"
import {
  RequestBodyValidation,
  validateRequestBody,
} from "../utils/validateRequestBody"
import { ExpressRoute } from "./types"

type SignUpRoute = ExpressRoute<AuthRequest, AuthResponse>

const Verifier: RequestBodyValidation<AuthRequest> = {
  name: { type: "string", required: true },
  password: { type: "string", required: true },
}

const handler: SignUpRoute["handler"] = (request, response, DB) => {
  const { name, password } = validateRequestBody(request.body, Verifier)
  const userId = DB.createUser(name, password)
  const token = Token.sign({ userId })
  response.header("Authorization", token).status(201).json({ token, userId })
}

export const route: SignUpRoute = {
  ...signUpRoute,
  handler,
}