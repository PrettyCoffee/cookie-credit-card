import { createHash } from "crypto"

export const hashMd5 = (value: string) =>
  createHash("md5").update(value, "utf-8").digest("hex")
