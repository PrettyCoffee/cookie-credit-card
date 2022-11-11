import { useMemo } from "preact/hooks"
import { Users, LogIn } from "react-feather"
import styled from "styled-components"

import { AuthForm } from "../../common/AuthForm"
import { AvatarIcon } from "../../common/AvatarIcon"
import { CardHeadline } from "../../common/CardHeadline"
import { FillerLink } from "../../common/FillerLink"
import { Card } from "../../components"
import { useUser } from "../../providers"
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
  const { signIn } = useUser()
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
              onSubmit={({ password }) => signIn(password)}
            />
          </Wrapper>
        </Card.Front>
        <Card.Back>
          <FillerLink />
        </Card.Back>
      </Card>
    </div>
  )
}
