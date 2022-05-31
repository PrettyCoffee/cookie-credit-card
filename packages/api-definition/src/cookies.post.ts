import { Route } from "./types"

export interface TransferCookiesRequest {
  name: string
  amount: number
}

export interface TransferCookiesResponse {}

export const transferCookiesRoute: Route = {
  path: "/cookies",
  method: "post",
  protect: true,
}
