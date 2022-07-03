import { PropsWithChildren } from "@ccc/components"
import { useState, useEffect } from "react"
import {
  Route,
  Redirect,
  Router,
  Switch,
  BaseLocationHook,
  RouteProps,
  useLocation,
} from "wouter-preact"

import { useAuth } from "../providers/auth"
import { routes } from "./routes"

const currentLocation = () => window.location.hash.replace(/^#/, "") || "/"
const navigate = (to: string) => {
  const { origin } = window.location
  window.location.assign(`${origin}/#${to}`)
}

const useHashLocation: BaseLocationHook = () => {
  const [location, setLocation] = useState(currentLocation())

  useEffect(() => {
    const handler = () => setLocation(currentLocation())
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  return [location, navigate]
}

const AuthBasedRedirect = () => {
  const { authenticated } = useAuth()
  const to = authenticated ? routes.card.path : routes.signIn.path
  return <Redirect to={to} />
}

const AuthRoute = ({ component, ...props }: Omit<RouteProps, "children">) => {
  const { authenticated } = useAuth()
  const [, navigate] = useLocation()
  if (authenticated) navigate(routes.card.path)
  return <Route component={component} {...props} />
}

const ProtectedRoute = ({
  component,
  ...props
}: Omit<RouteProps, "children">) => {
  const { authenticated } = useAuth()
  if (!authenticated) navigate(routes.signIn.path)
  return <Route component={component} {...props} />
}

export const Routes = ({ children }: PropsWithChildren) => (
  <Router hook={useHashLocation}>
    <Switch>
      <AuthRoute {...routes.signIn} />
      <AuthRoute {...routes.signUp} />

      <ProtectedRoute {...routes.card} />
      <ProtectedRoute {...routes.overview} />

      <AuthBasedRedirect />
    </Switch>
    {children}
  </Router>
)
