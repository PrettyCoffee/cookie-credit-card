import { Card, Link } from "@ccc/components"
import { UserPlus, LogIn } from "react-feather"
import styled from "styled-components"
import { Link as WouterLink } from "wouter-preact"

import { AuthForm } from "../../common/AuthForm"
import { AvatarIcon } from "../../common/AvatarIcon"
import { CardHeadline } from "../../common/CardHeadline"
import { useAuth } from "../../providers/auth"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`

export const SignUp = () => {
  const { signUp } = useAuth()
  return (
    <div>
      <CardHeadline caption="Create account" />
      <Card>
        <Card.Front>
          <Wrapper>
            <AvatarIcon icon={UserPlus} />
            <AuthForm
              submitCaption="Sign up"
              submitIcon={LogIn}
              onSubmit={signUp}
            />
          </Wrapper>
        </Card.Front>
        <Card.Back>
          <WouterLink href="/sign-in">
            <Link label="Use existing account?" inverted />
          </WouterLink>
        </Card.Back>
      </Card>
    </div>
  )
}
