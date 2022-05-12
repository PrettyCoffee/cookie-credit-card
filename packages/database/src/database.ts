import { DBFileTable, DBRow } from "./table"

export interface DatabaseOptions {
  salt: string
  directory: string
}

export type DatabaseData = Record<string, DBRow[]>

type TableName<T extends DatabaseData> = keyof T
type TableType<
  T extends DatabaseData,
  Table extends TableName<T>
> = T[Table][number]

/** Casts { key: T[] } to { key: DBFileTable<T> } */
type Tables<T extends DatabaseData> = {
  [key in TableName<T>]: DBFileTable<TableType<T, key>>
}

export class Database<T extends DatabaseData> {
  public tables: Tables<T>

  constructor(initialValue: T, { directory, salt }: DatabaseOptions) {
    const keys = Object.keys(initialValue) as Array<TableName<T>>
    this.tables = {} as Tables<T>
    keys.forEach(key => {
      this.tables[key] = new DBFileTable(
        initialValue[key],
        `${directory}/${key}.db`,
        salt
      )
    })
  }

  public getTable<key extends TableName<T>>(name: key): Tables<T>[key] {
    return this.tables[name]
  }
}
