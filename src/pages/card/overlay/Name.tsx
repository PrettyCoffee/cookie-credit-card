import styled, { css } from "styled-components"

import { Text } from "../../../components"
import { useUser } from "../../../providers"

const Layout = styled.div`
  ${({ theme: { space } }) => css`
    position: absolute;
    bottom: ${space.medium};
    left: 2rem;
  `}
`

export const Name = () => {
  const { name } = useUser()
  return (
    <Layout>
      <Text.Small>{name}s Cookie Credit Card</Text.Small>
    </Layout>
  )
}
