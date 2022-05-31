import {
  TransferCookiesRequest,
  TransferCookiesResponse,
  transferCookiesRoute,
} from "@ccc/api-definition"

import { errors } from "../utils/errors"
import { Token } from "../utils/token"
import {
  RequestBodyValidation,
  validateRequestBody,
} from "../utils/validateRequestBody"
import { ExpressRoute } from "./types"

type TransferCookiesRoute = ExpressRoute<
  TransferCookiesRequest,
  TransferCookiesResponse
>

const Verifier: RequestBodyValidation<TransferCookiesRequest> = {
  name: { type: "string", required: true },
  amount: { type: "number", required: true },
}

const handler: TransferCookiesRoute["handler"] = (request, response, DB) => {
  const { name, amount } = validateRequestBody(request.body, Verifier)
  const userId = request.headers.userId
  if (!userId || typeof userId !== "string") throw errors.BAD_REQUEST

  const user = DB.getUserById(userId)
  user?.transferCookies(name, amount)

  const jwt = Token.sign({ userId })
  response.header("Authorization", jwt).status(204).end()
}

export const route: TransferCookiesRoute = {
  ...transferCookiesRoute,
  handler,
}
