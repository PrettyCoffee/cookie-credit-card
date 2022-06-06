import { Text } from "@ccc/components"
import styled, { css } from "styled-components"

import { useAuth } from "../../../providers/auth"

const Layout = styled.div`
  ${({ theme: { space } }) => css`
    position: absolute;
    bottom: ${space.medium};
    left: 2rem;
  `}
`

const sentenceCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export const Name = () => {
  const { user } = useAuth()
  const name = sentenceCase(user?.name || "")
  return (
    <Layout>
      <Text.Small>{name}s Cookie Credit Card</Text.Small>
    </Layout>
  )
}
