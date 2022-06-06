import { TokenPayload } from "@ccc/api-definition"
import { PropsWithChildren } from "@ccc/components"
import { decode } from "jsonwebtoken"
import { useState } from "react"

import { signIn, signUp } from "../../service"
import { AuthContext } from "./AuthContext"

export const storageKey = "ccc-auth"
const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(storageKey)
  )

  const handleChange = (token: string | null) => {
    if (token) localStorage.setItem(storageKey, token)
    else localStorage.removeItem(storageKey)

    setToken(token)
  }

  return [token, handleChange] as const
}

const parseToken = (token: string | null) => {
  if (!token) return null
  const rawToken = token.replace("Bearer ", "")
  const payload = decode(rawToken) as TokenPayload
  return payload
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useAuthToken()
  const user = parseToken(token)

  const handleSignIn = (name: string, password: string) => {
    signIn(name, password).then(response => {
      if (response.type === "success") {
        const { token } = response.body
        setToken(token)
      }
    })
  }

  const handleSignUp = (name: string, password: string) => {
    signUp(name, password).then(response => {
      if (response.type === "success") {
        const { token } = response.body
        setToken(token)
      }
    })
  }

  const handleSignOut = () => setToken(null)

  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(token),
        jwt: token,
        user,
        signIn: handleSignIn,
        signUp: handleSignUp,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
