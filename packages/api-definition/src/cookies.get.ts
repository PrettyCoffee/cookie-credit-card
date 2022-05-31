import { Route } from "./types"

export interface GetCookiesRequest {}

interface Debt {
  creditor: string
  amount: number
}

interface Credit {
  debtor: string
  amount: number
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
