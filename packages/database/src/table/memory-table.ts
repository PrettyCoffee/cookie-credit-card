import { createId } from "../utils/createId"
import { IDBTable, DBRow } from "./table"

export class DBMemoryTable<T extends DBRow> implements IDBTable<T> {
  protected data: T[]

  constructor(data: T[]) {
    this.data = data
  }

  public getData() {
    return this.data
  }
  public findOne<Key extends keyof T>(field: Key, searchValue: T[Key]) {
    return this.data.find(row => row[field] === searchValue) || null
  }
  public findById(id: string) {
    return this.findOne("id", id)
  }
  public findAll<Key extends keyof T>(field: Key, searchValue: T[Key]) {
    return this.data.filter(row => row[field] === searchValue)
  }

  public create(newRow: Omit<T, "id">) {
    let id = createId()
    while (this.findById(id)) id = createId()
    const result = { ...newRow, id } as T
    this.data.push(result)
    return result
  }

  public update(id: string, newValue: Omit<T, "id">) {
    this.assertExists(id)
    const index = this.data.findIndex(row => row.id === id)
    const newElement = { ...newValue, id } as T
    this.data[index] = newElement
    return newElement
  }
  public patch<Key extends keyof T>(id: string, field: Key, newValue: T[Key]) {
    this.assertExists(id)
    const element = this.findById(id) as T
    element[field] = newValue
    return element
  }

  public delete(id: string) {
    this.assertExists(id)
    const index = this.data.findIndex(row => row.id === id)
    if (index === -1) return
    this.data.splice(index, 1)
  }
  public deleteAll<Key extends keyof T>(field: Key, searchValue: T[Key]) {
    this.data = this.data.filter(row => row[field] !== searchValue)
  }

  private assertExists(id: string) {
    if (!this.findById(id)) throw `MISSING_RESSOURCE`
  }
}
