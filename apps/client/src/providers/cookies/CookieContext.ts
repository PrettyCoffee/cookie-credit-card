import { GetCookiesResponse } from "@ccc/api-definition"
import { createContext } from "react"

interface CookieState extends GetCookiesResponse {
  totalDebts: number
  totalCredits: number
  transfer: (name: string, amount: number) => void
}

const initialCookies: CookieState = {
  credits: [],
  debts: [],
  totalDebts: 0,
  totalCredits: 0,
  transfer: () => null,
}

export const CookieContext = createContext(initialCookies)
