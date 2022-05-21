import { Request, Response } from "express"

import { CookieDatabase } from "../database"

export interface Route {
  path: string
  method: "get" | "post"
  protect: boolean
  handler: (request: Request, response: Response, DB: CookieDatabase) => void
}
