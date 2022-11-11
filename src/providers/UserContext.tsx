import { createContext } from "preact"
import { useContext } from "preact/hooks"

import { PropsWithChildren } from "../components"
import { useStorage, encrypt, validate } from "./utils"

export interface User {
  name: string
  password: string
}

interface UserState {
  name?: string
  signIn: (password: string) => Promise<boolean>
  signOut: () => void
  createUser: (user: User) => void
  authenticated: boolean
  deleteUser: () => void
}

const initialState: UserState = {
  signIn: () => new Promise(() => false),
  signOut: () => null,
  createUser: () => null,
  authenticated: false,
  deleteUser: () => null,
}

const Context = createContext(initialState)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useStorage<User | null>("ccc-user", null)
  const [authenticated, setAuthenticated] = useStorage(
    "ccc-authenticated",
    false
  )

  const createUser = async ({ name, password }: User) => {
    if (!validate(password)) return false
    await encrypt(password).then(password => setUser({ name, password }))
    setAuthenticated(true)
    return true
  }

  const signIn = (password: string) =>
    encrypt(password).then(password => {
      const valid = user?.password === password
      setAuthenticated(valid)
      return valid
    })

  const signOut = () => setAuthenticated(false)
  const deleteUser = () => setUser(null)

  return (
    <Context.Provider
      value={{
        createUser,
        name: user?.name,
        signIn,
        signOut,
        authenticated,
        deleteUser,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useUser = () => useContext(Context)
