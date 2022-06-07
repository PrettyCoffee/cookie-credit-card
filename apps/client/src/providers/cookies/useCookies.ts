import { useContext } from "preact/hooks"

import { CookieContext } from "./CookieContext"

export const useCookies = () => useContext(CookieContext)
