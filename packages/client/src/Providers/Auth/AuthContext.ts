import { createContext } from "react"

type AuthState = {
  auth: string
  setAuth: (value: string) => void
  authenticated: boolean
}

const initialAuth: AuthState = {
  auth: "",
  setAuth: () => null,
  authenticated: false,
}

export const AuthContext = createContext(initialAuth)
