import express from "express"

const app = express()

const PORT = 8000

app.use(express.json())

app.get("/test", (_req, _res) => {
  _res.send("TypeScript With Express")
})

app.listen(PORT, () => console.log("server is running at", PORT))
