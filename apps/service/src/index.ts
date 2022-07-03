import cors from "cors"
import express from "express"

import { CookieDatabase } from "./database"
import Routes from "./routes"
import { createAdmin } from "./utils/createAdmin"
import { errorHandler } from "./utils/errors"
import { protectedRoute } from "./utils/protectedRoute"

const DB = new CookieDatabase()
createAdmin(DB)

const app = express()

app.use(cors())

app.use(express.json())

Routes.forEach(({ method, path, protect, handler }) => {
  app[method](path, (req, res, next) => {
    try {
      if (protect) protectedRoute(req, res, next)
      handler(req, DB).then(({ status, body }) => {
        if (body) res.status(status).json(body)
        else res.status(status).end()
      })
    } catch (e: any) {
      errorHandler(e, res)
    }
  })
})

app.listen(8000, () => console.log("server is running at 8000"))
