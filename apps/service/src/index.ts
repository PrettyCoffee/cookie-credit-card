import express from "express"

import { CookieDatabase } from "./database"
import Routes from "./routes"
import { errorHandler } from "./utils/errors"
import { protectedRoute } from "./utils/protectedRoute"
import path from "path"

const databasePath = path.resolve("../../data")

const DB = new CookieDatabase(databasePath)

const app = express()

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
