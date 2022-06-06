import {
  GetCookiesRequest,
  GetCookiesResponse,
  getCookiesRoute,
} from "@ccc/api-definition"

import { errors } from "../utils/errors"
import { getTokenFromHeaders } from "../utils/getTokenFromHeaders"
import { ExpressRoute } from "./types"

type GetCookiesRoute = ExpressRoute<GetCookiesRequest, GetCookiesResponse>

const handler: GetCookiesRoute["handler"] = (request, response, DB) => {
  const payload = getTokenFromHeaders(request.headers)
  if (!payload) throw errors.BAD_REQUEST

  const user = DB.getUserById(payload.id)
  const cookies = user?.getCookies()
  if (!cookies) throw errors.BAD_REQUEST

  response.status(200).json(cookies)
}

export const route: GetCookiesRoute = {
  ...getCookiesRoute,
  handler,
}
