import { hashMd5 } from "../utils"
import { createCipheriv, createDecipheriv, randomBytes } from "crypto"

export class DBEncryption<T extends unknown> {
  private readonly algorithm = "aes-256-cbc"
  private salt: string

  constructor(salt: string) {
    this.salt = hashMd5(salt)
  }

  public encrypt(database: T) {
    const text = JSON.stringify(database)
    const iv = randomBytes(16)
    const cipher = createCipheriv(this.algorithm, this.salt, iv)
    return Buffer.from([
      ...iv,
      ...cipher.update(text, "utf-8"),
      ...cipher.final(),
    ])
  }

  public decrypt(value: Buffer): T {
    const iv = value.slice(0, 16)
    const content = value.slice(16).toString("hex")
    const decipher = createDecipheriv(this.algorithm, this.salt, iv)

    let text
    try {
      text = decipher.update(content, "hex", "utf-8") + decipher.final()
    } catch {
      throw "INVALID_SALT"
    }

    return JSON.parse(text)
  }
}
