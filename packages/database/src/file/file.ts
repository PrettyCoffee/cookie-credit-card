import { DBEncryption } from "./encryption"
import { readFileSync, writeFileSync, existsSync } from "fs"

const fileEncoding: BufferEncoding = "hex"

export class DBFile<T extends unknown> {
  private readonly encryption: DBEncryption<T>
  private readonly path: string

  constructor(path: string, initialValue: T, fileSalt: string) {
    this.path = path
    this.encryption = new DBEncryption<T>(fileSalt)
    if (!existsSync(path)) this.write(initialValue)
  }

  public read(): T {
    const content = readFileSync(this.path, fileEncoding)
    const bytes = Buffer.from(content, "hex")
    return this.encryption.decrypt(bytes)
  }

  public write(database: T) {
    const content = this.encryption.encrypt(database)
    writeFileSync(this.path, content, fileEncoding)
  }
}
