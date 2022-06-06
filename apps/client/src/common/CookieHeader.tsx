import { Header } from "@ccc/components"
import { Users, LogOut, Home, Book, Info, HelpCircle } from "react-feather"
import { useLocation } from "wouter-preact"

import { useAuth } from "../providers/auth"

export const CookieHeader = () => {
  const { signOut, authenticated, user } = useAuth()

  const setLocation = useLocation()[1]

  const isAuthenticated = () => authenticated
  const isAdmin = () => user?.role === "admin"

  return (
    <Header
      actions={[
        {
          icon: HelpCircle,
          label: "Help",
          onClick: () => setLocation("/help"),
          condition: () => true,
        },
        {
          icon: Users,
          label: "Users overview",
          onClick: () => setLocation("/overview"),
          condition: isAdmin,
        },
        {
          icon: Book,
          label: "Credit book",
          onClick: () => setLocation("/credit-book"),
          condition: isAuthenticated,
        },
        {
          icon: Home,
          label: "Credit card",
          onClick: () => setLocation("/card"),
          condition: isAuthenticated,
        },
        {
          icon: LogOut,
          label: "Sign out",
          onClick: signOut,
          condition: isAuthenticated,
        },
      ]}
    />
  )
}
