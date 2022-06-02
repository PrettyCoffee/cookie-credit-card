import { Text } from "@ccc/components"
import styled, { css } from "styled-components"
const Layout = styled.div`
  ${({ theme: { space } }) => css`
    position: absolute;
    bottom: ${space.medium};
    left: 2rem;
  `}
`
export const Name = () => (
  <Layout>
    <Text.Small>Jennys Cookie Credit Card</Text.Small>
  </Layout>
)
