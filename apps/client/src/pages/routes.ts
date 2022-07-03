import { FunctionComponent } from "preact"
import { useLocation as useWouterLocation } from "wouter-preact"

import { Card } from "./card/Card"
import { Overview } from "./overview"
import { SignIn } from "./sign-in/SignIn"
import { SignUp } from "./sign-up/SignUp"

type RouteName = "signIn" | "signUp" | "card" | "overview"

export interface CookieRoute {
  path: string
  component: FunctionComponent
}

export const routes: Record<RouteName, CookieRoute> = {
  signIn: {
    path: "/sign-in",
    component: SignIn,
  },
  signUp: {
    path: "/sign-up",
    component: SignUp,
  },
  card: {
    path: "/card",
    component: Card,
  },
  overview: {
    path: "/overview",
    component: Overview,
  },
}

export const useLocation = () => {
  const [location, setLocation] = useWouterLocation()

  const navigate = (routeName: RouteName) => {
    const { path } = routes[routeName]
    setLocation(path)
  }

  return [location, navigate] as const
}
