import { DBFile } from "../file/file"
import { DBMemoryTable } from "./memory-table"
import { IDBTable, DBRow } from "./table"

export class DBFileTable<T extends DBRow>
  extends DBMemoryTable<T>
  implements IDBTable<T>
{
  private file: DBFile<T[]>

  constructor(initialData: T[], filePath: string, fileSalt: string) {
    const file = new DBFile(filePath, initialData, fileSalt)
    super(file.read())
    this.file = file
  }

  public create(element: Omit<T, "id">) {
    const newRow = super.create(element)
    this.save()
    return newRow
  }

  public update(id: string, newElement: T) {
    const newRow = super.update(id, newElement)
    this.save()
    return newRow
  }
  public patch<Key extends keyof T>(id: string, field: Key, newValue: T[Key]) {
    const newRow = super.patch(id, field, newValue)
    this.save()
    return newRow
  }

  public delete(id: string) {
    super.delete(id)
    this.save()
  }
  public deleteAll<Key extends keyof T>(field: Key, searchValue: T[Key]) {
    super.deleteAll(field, searchValue)
    this.save()
  }

  private save() {
    this.file.write(this.data)
  }
}
