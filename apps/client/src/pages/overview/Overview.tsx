import styled, { css } from "styled-components"

import { Credits } from "./Credits"
import { Debts } from "./Debts"

const Scroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const Content = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    margin: 0 auto;
    gap: calc(${space.largest} * 2);
    padding: calc(${space.largest} * 2);
  `}
`

export const Overview = () => {
  return (
    <Scroll>
      <Content>
        <Credits />
        <Debts />
      </Content>
    </Scroll>
  )
}
