import { useMemo } from "preact/hooks"

import { PropsWithChildren } from "../components"
import { useUser } from "../providers"
import { Card } from "./card/Card"
import { SignIn } from "./sign-in/SignIn"
import { SignUp } from "./sign-up/SignUp"

export const Routes = ({ children }: PropsWithChildren) => {
  const { authenticated, name } = useUser()

  const content = useMemo(() => {
    const userExists = name != null

    if (authenticated) return <Card />
    else if (userExists) return <SignIn />
    return <SignUp />
  }, [authenticated, name])

  return (
    <>
      {children}
      {content}
    </>
  )
}
