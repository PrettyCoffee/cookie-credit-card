import { createHash } from "crypto"

export const encrypt = (name: string, password: string, salt: string) => {
  const hash = createHash("sha256")
  return hash.update(password).update(name).update(salt).digest("hex")
}
