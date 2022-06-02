import {
  TransferCookiesRequest,
  TransferCookiesResponse,
  transferCookiesRoute,
} from "@ccc/api-definition"

import { serviceCall } from "./serviceCall"

export const transferCookies = (name: string, amount: number) =>
  serviceCall<TransferCookiesRequest, TransferCookiesResponse>(
    transferCookiesRoute,
    {
      name,
      amount,
    }
  )
