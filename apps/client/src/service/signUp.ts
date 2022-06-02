import { AuthRequest, AuthResponse, signUpRoute } from "@ccc/api-definition"

import { serviceCall } from "./serviceCall"

export const signUp = (name: string, password: string) =>
  serviceCall<AuthRequest, AuthResponse>(signUpRoute, {
    name,
    password,
  })
