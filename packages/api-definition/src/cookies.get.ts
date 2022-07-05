import { Route } from "./types"

export interface GetCookiesRequest {}

export interface Debt {
  creditor: string
  amount: number
  lastUpdated: Date
}

export interface Credit {
  debtor: string
  amount: number
  lastUpdated: Date
}

export interface GetCookiesResponse {
  debts: Debt[]
  credits: Credit[]
}

export const getCookiesRoute: Route = {
  path: "/cookies",
  method: "get",
  protect: true,
}
