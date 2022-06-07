import dotenv from "dotenv"

dotenv.config({ path: "../../.env" })

type EnvVar =
  | "DB_SECRET"
  | "PWD_SECRET"
  | "JWT_SECRET"
  | "ADMIN_NAME"
  | "ADMIN_PWD"
const Variables: EnvVar[] = [
  "DB_SECRET",
  "PWD_SECRET",
  "JWT_SECRET",
  "ADMIN_NAME",
  "ADMIN_PWD",
]

const ENV = {} as Record<EnvVar, string>

Variables.forEach(VAR => {
  const value = process.env[VAR]
  if (!value) throw new Error(`MISSING_${VAR}`)
  ENV[VAR] = value
})

export default ENV
