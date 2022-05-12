export interface DBRow {
  [key: string]: unknown
  id: string
}

export interface IDBTable<T extends DBRow> {
  getData(): T[]

  findOne<Key extends keyof T>(field: Key, searchValue: T[Key]): T | null
  findById(id: string): T | null
  findAll<Key extends keyof T>(field: Key, searchValue: T[Key]): T[]

  create(data: Omit<T, "id">): void
  update(id: string, newValue: Omit<T, "id">): T
  patch<Key extends keyof T>(id: string, field: Key, newValue: T[Key]): T

  delete(id: string): void
}
