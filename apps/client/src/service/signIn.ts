import { AuthRequest, AuthResponse, signInRoute } from "@ccc/api-definition"

import { serviceCall } from "./serviceCall"

export const signIn = (name: string, password: string) =>
  serviceCall<AuthRequest, AuthResponse>(signInRoute, {
    name,
    password,
  })
