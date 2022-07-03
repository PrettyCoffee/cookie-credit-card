import {
  TransferCookiesRequest,
  TransferCookiesResponse,
  transferCookiesRoute,
} from "@ccc/api-definition"

import { errors } from "../utils/errors"
import { getTokenFromHeaders } from "../utils/getTokenFromHeaders"
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

const handler: TransferCookiesRoute["handler"] = (request, DB) => {
  const { name, amount } = validateRequestBody(request.body, Verifier)
  const payload = getTokenFromHeaders(request.headers)
  if (!payload) throw errors.BAD_REQUEST

  return DB.getUserById(payload.id).then(user => {
    user?.transferCookies(name, amount)
    return {
      status: 204,
    }
  })
}

export const route: TransferCookiesRoute = {
  ...transferCookiesRoute,
  handler,
}
