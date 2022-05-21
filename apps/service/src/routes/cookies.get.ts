import { errors } from "../utils/errors"
import { Route } from "./types"

const handler: Route["handler"] = (request, response, DB) => {
  const userId = request.headers.userId
  if (!userId || typeof userId !== "string") throw errors.BAD_REQUEST

  const user = DB.getUserById(userId)
  const cookies = user?.getCookies()
  if (!cookies) throw errors.BAD_REQUEST

  response.status(200).json(cookies)
}

export const route: Route = {
  path: "/cookies",
  method: "get",
  protect: true,
  handler,
}
