import { UserPlus, LogIn } from "react-feather"
import styled from "styled-components"

import { AuthForm } from "../../common/AuthForm"
import { AvatarIcon } from "../../common/AvatarIcon"
import { CardHeadline } from "../../common/CardHeadline"
import { FillerLink } from "../../common/FillerLink"
import { Card } from "../../components"
import { useUser } from "../../providers"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`

export const SignUp = () => {
  const { createUser } = useUser()

  return (
    <div>
      <CardHeadline caption="Initialize" />
      <Card>
        <Card.Front>
          <Wrapper>
            <AvatarIcon icon={UserPlus} />
            <AuthForm
              submitCaption="Initialize"
              submitIcon={LogIn}
              onSubmit={createUser}
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
