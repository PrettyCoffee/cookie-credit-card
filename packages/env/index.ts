import dotenv from "dotenv"

dotenv.config({ path: "../../.env" })

type EnvVar = "DB_SECRET" | "PWD_SECRET" | "JWT_SECRET"
const Variables: EnvVar[] = ["DB_SECRET", "PWD_SECRET", "JWT_SECRET"]

const ENV = {} as Record<EnvVar, string>

Variables.forEach(VAR => {
  const value = process.env[VAR]
  if (!value) throw new Error(`MISSING_${VAR}`)
  ENV[VAR] = value
})

export default ENV
