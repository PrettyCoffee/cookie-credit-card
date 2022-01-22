import styled, { css } from "styled-components"

import Authentication from "./Authentication"
import Overlay from "./Overlay"

const Container = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;
    overflow: hidden;
    border-radius: ${space.medium};
    margin: ${space.largest};

    box-shadow: var(--shadow-elevation-medium);
  `}
`

const Card = () => (
  <Container>
    <Overlay />
    <Authentication />
  </Container>
)

export default Card
