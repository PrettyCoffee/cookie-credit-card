import {
  GetCookiesRequest,
  GetCookiesResponse,
  getCookiesRoute,
} from "@ccc/api-definition"

import { serviceCall } from "./serviceCall"

export const getCookies = () =>
  serviceCall<GetCookiesRequest, GetCookiesResponse>(getCookiesRoute)
