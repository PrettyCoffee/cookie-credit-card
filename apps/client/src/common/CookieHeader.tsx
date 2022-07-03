import { Header } from "@ccc/components"
import { Users, LogOut, Home, Book, HelpCircle } from "react-feather"
import { useLocation } from "wouter-preact"

import { routes } from "../pages/routes"
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
          label: "Admin overview",
          onClick: () => setLocation("/admin"),
          condition: isAdmin,
        },
        {
          icon: Book,
          label: "Cookie overview",
          onClick: () => setLocation("/overview"),
          condition: isAuthenticated,
        },
        {
          icon: Home,
          label: "Credit card",
          onClick: () => setLocation(routes.card.path),
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
