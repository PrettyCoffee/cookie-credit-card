import { PropsWithChildren } from "@ccc/components"
import { useState } from "react"

import { AuthContext } from "./AuthContext"
import { AuthIndicator } from "./fragments/AuthIndicator"
import {
  getNewAuthDate,
  safetyKey,
  storageKey,
  sha256,
  useStorage,
  isExpired,
} from "./utils"

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [{ auth, expires }, setAuth] = useStorage(storageKey, {
    auth: "",
    expires: getNewAuthDate(),
  })
  sha256(auth).then(hash => setAuthenticated(hash === safetyKey))

  const handleAuthChange = (value: string) => setAuth({ auth: value, expires })

  if (isExpired(expires)) setAuth({ auth: "", expires: getNewAuthDate() })

  return (
    <AuthContext.Provider
      value={{ auth, setAuth: handleAuthChange, authenticated }}
    >
      <AuthIndicator />
      {children}
    </AuthContext.Provider>
  )
}
