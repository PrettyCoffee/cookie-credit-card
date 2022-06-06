import { Route } from "./types"

export interface AuthRequest {
  name: string
  password: string
}

export interface AuthResponse {
  token: string
}

export const signInRoute: Route = {
  path: "/auth/sign-in",
  method: "post",
  protect: false,
}

export const signUpRoute: Route = {
  path: "/auth/sign-up",
  method: "post",
  protect: false,
}
