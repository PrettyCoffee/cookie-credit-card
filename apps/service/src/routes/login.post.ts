import { errors } from "../utils/errors"
import { Token } from "../utils/token"
import {
  RequestBodyValidation,
  validateRequestBody,
} from "../utils/validateRequestBody"
import { Route } from "./types"

type RequestBody = {
  name: string
  password: string
}

const Verifier: RequestBodyValidation<RequestBody> = {
  name: { type: "string", required: true },
  password: { type: "string", required: true },
}

const handler: Route["handler"] = (request, response, DB) => {
  const { name, password } = validateRequestBody(request.body, Verifier)
  const userId = DB.validateCredentials(name, password)
  if (!userId) throw errors.BAD_REQUEST
  const jwt = Token.sign({ userId })
  response.header("Authorization", jwt).status(200).json({ userId })
}

export const route: Route = {
  path: "/auth/login",
  method: "post",
  protect: false,
  handler,
}
