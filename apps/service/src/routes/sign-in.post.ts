import { signInRoute, AuthRequest, AuthResponse } from "@ccc/api-definition"

import { errors } from "../utils/errors"
import { Token } from "../utils/token"
import {
  RequestBodyValidation,
  validateRequestBody,
} from "../utils/validateRequestBody"
import { ExpressRoute } from "./types"

type SignInRoute = ExpressRoute<AuthRequest, AuthResponse>

const Verifier: RequestBodyValidation<AuthRequest> = {
  name: { type: "string", required: true },
  password: { type: "string", required: true },
}

const handler: SignInRoute["handler"] = (request, response, DB) => {
  const { name, password } = validateRequestBody(request.body, Verifier)
  const userId = DB.validateCredentials(name, password)
  if (!userId) throw errors.BAD_REQUEST
  const jwt = Token.sign({ userId })
  response.header("Authorization", jwt).status(200).json({ userId })
}

export const route: SignInRoute = {
  ...signInRoute,
  handler,
}
