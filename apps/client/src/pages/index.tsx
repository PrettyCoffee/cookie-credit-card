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
import { Card } from "./card/Card"
import { SignIn } from "./sign-in/SignIn"
import { SignUp } from "./sign-up/SignUp"

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
  const to = authenticated ? "/card" : "/sign-in"
  return <Redirect to={to} />
}

const AuthRoute = ({ component, ...props }: Omit<RouteProps, "children">) => {
  const { authenticated } = useAuth()
  const [, navigate] = useLocation()
  if (authenticated) navigate("/card")
  return <Route component={component} {...props} />
}

const ProtectedRoute = ({
  component,
  ...props
}: Omit<RouteProps, "children">) => {
  const { authenticated } = useAuth()
  if (!authenticated) navigate("/sign-in")
  return <Route component={component} {...props} />
}

export const Routes = () => (
  <Router hook={useHashLocation}>
    <Switch>
      <ProtectedRoute path="/card" component={Card} />

      <AuthRoute path="/sign-in" component={SignIn} />
      <AuthRoute path="/sign-up" component={SignUp} />

      <AuthBasedRedirect />
    </Switch>
  </Router>
)
