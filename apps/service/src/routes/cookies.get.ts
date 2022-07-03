import {
  GetCookiesRequest,
  GetCookiesResponse,
  getCookiesRoute,
} from "@ccc/api-definition"

import { errors } from "../utils/errors"
import { getTokenFromHeaders } from "../utils/getTokenFromHeaders"
import { ExpressRoute } from "./types"

type GetCookiesRoute = ExpressRoute<GetCookiesRequest, GetCookiesResponse>

const handler: GetCookiesRoute["handler"] = (request, DB) => {
  const payload = getTokenFromHeaders(request.headers)
  if (!payload) throw errors.BAD_REQUEST

  return DB.getUserById(payload.id)
    .then(user => user?.getCookies())
    .then(cookies => {
      if (!cookies) throw errors.BAD_REQUEST
      return {
        status: 200,
        body: cookies,
      }
    })
}

export const route: GetCookiesRoute = {
  ...getCookiesRoute,
  handler,
}
