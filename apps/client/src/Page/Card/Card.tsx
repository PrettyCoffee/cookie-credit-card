import styled, { css } from "styled-components"

import { Authentication } from "./authentication"
import { Overlay } from "./overlay"

const Container = styled.div`
  ${({ theme: { space, shadow } }) => css`
    position: relative;
    overflow: hidden;
    border-radius: ${space.medium};
    margin: ${space.largest};

    box-shadow: ${shadow.medium};
  `}
`

export const Card = () => (
  <Container>
    <Overlay />
    <Authentication />
  </Container>
)
