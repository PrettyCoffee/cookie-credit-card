export type User = {
  id: string
  name: string
  password: string
  role: "user" | "admin"
}

export type Cookie = {
  id: string
  debtor: string
  creditor: string
  amount: number
}

export type CookieDatabaseDefinition = {
  users: User[]
  cookies: Cookie[]
}
