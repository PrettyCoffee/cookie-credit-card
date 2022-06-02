import { ErrorResponse, Route } from "@ccc/api-definition"

type ApiResponse<T extends unknown> =
  | {
      type: "error"
      body: ErrorResponse
    }
  | {
      type: "success"
      body: T
    }

const isErrorResponse = (response: unknown): response is ErrorResponse =>
  typeof response === "object" &&
  response !== null &&
  "code" in response &&
  "id" in response &&
  "message" in response

const readLocalToken = () => localStorage.getItem("ccc-auth")
const createHeaders = (protect: boolean) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  })
  const token = readLocalToken()
  if (protect && token) headers.append("Authorization", token)

  return headers
}

const baseUrl = "http://localhost:8000"

export const serviceCall = <ReqBody extends unknown, ResBody extends unknown>(
  { method, path, protect }: Route,
  body?: ReqBody
): Promise<ApiResponse<ResBody>> =>
  fetch(baseUrl + path, {
    method,
    headers: createHeaders(protect),
    body: body ? JSON.stringify(body) : undefined,
  }).then(async response => {
    const result = await response.json()
    if (response.ok) return { type: "success", body: result }
    if (isErrorResponse(result)) return { type: "error", body: result }
    throw result
  })
