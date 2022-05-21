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
  const userId = DB.createUser(name, password)
  const jwt = Token.sign({ userId })
  response.header("Authorization", jwt).status(201).json({ userId })
}

export const route: Route = {
  path: "/auth/register",
  method: "post",
  protect: false,
  handler,
}
