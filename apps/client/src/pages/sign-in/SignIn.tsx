import { Card, Link, Spacing } from "@ccc/components"
import { Users, LogIn } from "react-feather"
import styled from "styled-components"

import { AuthForm } from "../../common/AuthForm"
import { AvatarIcon } from "../../common/AvatarIcon"
import { CardHeadline } from "../../common/CardHeadline"
import { ThemeToggle } from "../../common/ThemeToggle"
import { useAuth } from "../../providers/auth"
import Hello from "./hello.json"

const randomHello = () => {
  const amount = Hello.length
  const index = Math.floor(Math.random() * amount)
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
  const hello = randomHello()
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
          <Link label="Create an account?" inverted />
          <Spacing bottom="small" />
          <Link href="#" label="Forgot password?" inverted />
        </Card.Back>
      </Card>
    </div>
  )
}
