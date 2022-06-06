import { VNode } from "preact"
import styled, { css } from "styled-components"

import { Back } from "./Back"
import { Front } from "./Front"

const Container = styled.div`
  ${({ theme: { space, shadow, color } }) => css`
    overflow: hidden;
    margin: ${space.largest};
    border-radius: ${space.medium};
    box-shadow: ${shadow.medium(color.bg.base)};
  `}
`

interface CardProps {
  children: VNode[]
}

export const Card = ({ children }: CardProps) => {
  const front = children.find(child => child.type === Front)
  const back = children.find(child => child.type === Back)
  return (
    <Container>
      {front}
      {back}
    </Container>
  )
}
