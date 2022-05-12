import { randomBytes } from "crypto"

export const createId = () => randomBytes(16).toString("hex")
