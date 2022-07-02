import dotenv from "dotenv"

dotenv.config({ path: "../../.env" })

type EnvVar =
  | "ADMIN_NAME"
  | "ADMIN_PWD"
  | "PWD_SECRET"
  | "JWT_SECRET"
  | "MYSQL_ROOT_PASSWORD"
  | "MYSQL_DATABASE"
  | "DATABASE_URL"

const Variables: EnvVar[] = [
  "ADMIN_NAME",
  "ADMIN_PWD",
  "PWD_SECRET",
  "JWT_SECRET",
  "MYSQL_ROOT_PASSWORD",
  "MYSQL_DATABASE",
  "DATABASE_URL",
]

const ENV = {} as Record<EnvVar, string>

Variables.forEach(VAR => {
  const value = process.env[VAR]
  if (!value) throw new Error(`MISSING_${VAR}`)
  ENV[VAR] = value
})

export default ENV
