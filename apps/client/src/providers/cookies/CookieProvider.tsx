import { GetCookiesResponse } from "@ccc/api-definition"
import { PropsWithChildren } from "@ccc/components"
import { useEffect, useState } from "preact/hooks"

import { getCookies, transferCookies } from "../../service"
import { CookieContext } from "./CookieContext"

const getTotalCredits = (credits: GetCookiesResponse["credits"]) =>
  credits.reduce((acc, { amount }) => acc + amount, 0)

const getTotalDebts = (debts: GetCookiesResponse["debts"]) =>
  debts.reduce((acc, { amount }) => acc + amount, 0)

const getTotalCookies = (cookies: GetCookiesResponse) => {
  const totalCredits = getTotalCredits(cookies.credits)
  const totalDebts = getTotalDebts(cookies.debts)
  return {
    totalCredits,
    totalDebts,
  }
}

const defaultCookies = {
  credits: [],
  debts: [],
}

export const CookieProvider = ({ children }: PropsWithChildren) => {
  const [cookies, setCookies] = useState<GetCookiesResponse>(defaultCookies)

  const requestCookies = () =>
    getCookies().then(response => {
      if (response.type === "success") {
        setCookies(response.body)
      }
    })

  useEffect(() => {
    requestCookies()
  }, [])

  const transfer = (name: string, amount: number) => {
    transferCookies(name, amount).then(requestCookies)
  }

  return (
    <CookieContext.Provider
      value={{
        ...getTotalCookies(cookies),
        credits: cookies.credits,
        debts: cookies.debts,
        transfer,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}
