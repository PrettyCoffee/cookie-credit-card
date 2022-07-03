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

const handler: SignInRoute["handler"] = (request, DB) => {
  const { name, password } = validateRequestBody(request.body, Verifier)
  return DB.validateCredentials(name, password).then(user => {
    if (!user) throw errors.BAD_REQUEST
    const token = Token.sign({ id: user.id, name: user.name, role: user.role })
    return {
      status: 200,
      body: { token },
    }
  })
}

export const route: SignInRoute = {
  ...signInRoute,
  handler,
}
