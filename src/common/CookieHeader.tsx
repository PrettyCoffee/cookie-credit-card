import { LogOut, Trash } from "react-feather"

import { Header } from "../components"
import { useUser, useCookies } from "../providers"

export const CookieHeader = () => {
  const { signOut, authenticated, deleteUser } = useUser()
  const [, setCookies] = useCookies()

  const theGreatReset = () => {
    deleteUser()
    signOut()
    setCookies(0)
  }

  const isAuthenticated = () => authenticated

  if (!authenticated) return null

  return (
    <Header
      actions={[
        {
          icon: LogOut,
          label: "Sign out",
          onClick: signOut,
          condition: isAuthenticated,
        },
        {
          icon: Trash,
          label: "Delete all data",
          onClick: theGreatReset,
          condition: isAuthenticated,
        },
      ]}
    />
  )
}
