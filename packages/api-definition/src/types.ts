export interface Route {
  path: string
  method: "get" | "post"
  protect: boolean
}

export interface ErrorResponse {
  code: number
  id: string
  message: string
}

export interface TokenPayload {
  id: string
  name: string
  role: "user" | "admin"
}
