import {
  TransferCookiesRequest,
  TransferCookiesResponse,
  transferCookiesRoute,
} from "@ccc/api-definition"

import { errors } from "../utils/errors"
import { getTokenFromHeaders } from "../utils/getTokenFromHeaders"
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
  const payload = getTokenFromHeaders(request.headers)
  if (!payload) throw errors.BAD_REQUEST

  DB.getUserById(payload.id).then(user => {
    user?.transferCookies(name, amount)
    const jwt = Token.sign(payload)
    response.header("Authorization", jwt).status(204).end()
  })
}

export const route: TransferCookiesRoute = {
  ...transferCookiesRoute,
  handler,
}
