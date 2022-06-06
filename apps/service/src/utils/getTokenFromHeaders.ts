import { TokenPayload } from "@ccc/api-definition"

import { IncomingHttpHeaders } from "http"

export const getTokenFromHeaders = (headers: IncomingHttpHeaders) => {
  const token = headers.token as unknown as TokenPayload
  if (!token || !token.id || !token.name || !token.role) return undefined
  return token
}
