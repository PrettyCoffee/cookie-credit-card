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
  if (protect) {
    app[method](path, protectedRoute, (req, res) => handler(req, res, DB))
  } else {
    app[method](path, (req, res) => handler(req, res, DB))
  }
})

app.use(errorHandler)

app.listen(8000, () => console.log("server is running at 8000"))
