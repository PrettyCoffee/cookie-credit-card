import { Card, Link, Spacing } from "@ccc/components"
import { useMemo } from "react"
import { Users, LogIn } from "react-feather"
import styled from "styled-components"
import { Link as WouterLink } from "wouter-preact"

import { AuthForm } from "../../common/AuthForm"
import { AvatarIcon } from "../../common/AvatarIcon"
import { CardHeadline } from "../../common/CardHeadline"
import { useAuth } from "../../providers/auth"
import { routes } from "../routes"
import Hello from "./hello.json"

const randomHello = () => {
  const amount = Hello.length
  const index = Math.floor(Math.random() * 100) % amount
  return Hello[index]
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`

export const SignIn = () => {
  const { signIn } = useAuth()
  const hello = useMemo(randomHello, [])

  return (
    <div>
      <CardHeadline caption={hello.hello} title={hello.language} />
      <Card>
        <Card.Front>
          <Wrapper>
            <AvatarIcon icon={Users} />
            <AuthForm
              submitCaption="Sign in"
              submitIcon={LogIn}
              onSubmit={signIn}
            />
          </Wrapper>
        </Card.Front>
        <Card.Back>
          <WouterLink href={routes.signUp.path}>
            <Link label="Create an account?" inverted />
          </WouterLink>
          <Spacing bottom="small" />
          <WouterLink href="/forgot">
            <Link label="Forgot password?" inverted />
          </WouterLink>
        </Card.Back>
      </Card>
    </div>
  )
}
