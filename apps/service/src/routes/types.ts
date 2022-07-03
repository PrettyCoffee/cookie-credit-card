import { Route } from "@ccc/api-definition"
import { Request } from "express"

import { CookieDatabase } from "../database"

interface TypedRequest<ReqBody extends unknown> extends Request {
  body: ReqBody
}

export interface ExpressRoute<ReqBody extends unknown, ResBody extends unknown>
  extends Route {
  handler: (
    request: TypedRequest<ReqBody>,
    DB: CookieDatabase
  ) => Promise<{
    status: number
    body?: ResBody
  }>
}
