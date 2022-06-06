import { TokenPayload } from "@ccc/api-definition"
import { createContext } from "react"

type AuthState = {
  jwt: string | null
  user: TokenPayload | null
  signIn: (name: string, password: string) => void
  signUp: (name: string, password: string) => void
  signOut: () => void
  authenticated: boolean
}

const initialAuth: AuthState = {
  jwt: null,
  user: null,
  signIn: () => null,
  signUp: () => null,
  signOut: () => null,
  authenticated: false,
}

export const AuthContext = createContext(initialAuth)
