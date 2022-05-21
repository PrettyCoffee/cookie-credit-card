import { errors } from "../utils/errors"
import { Token } from "../utils/token"
import {
  RequestBodyValidation,
  validateRequestBody,
} from "../utils/validateRequestBody"
import { Route } from "./types"

type RequestBody = {
  name: string
  amount: number
}

const Verifier: RequestBodyValidation<RequestBody> = {
  name: { type: "string", required: true },
  amount: { type: "number", required: true },
}

const handler: Route["handler"] = (request, response, DB) => {
  const { name, amount } = validateRequestBody(request.body, Verifier)
  const userId = request.headers.userId
  if (!userId || typeof userId !== "string") throw errors.BAD_REQUEST

  const user = DB.getUserById(userId)
  user?.transferCookies(name, amount)

  const jwt = Token.sign({ userId })
  response.header("Authorization", jwt).status(204).json({ userId })
}

export const route: Route = {
  path: "/cookies",
  method: "post",
  protect: true,
  handler,
}
