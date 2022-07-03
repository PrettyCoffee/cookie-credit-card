import { Card as CardComp } from "@ccc/components"
import styled from "styled-components"

import { Overlay } from "./overlay"
import { Underlay } from "./underlay/Underlay"

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 1.5rem;
  padding-top: 0;
  padding-left: 2rem;
`

export const Card = () => (
  <CardComp>
    <CardComp.Front>
      <Wrapper>
        <Overlay />
      </Wrapper>
    </CardComp.Front>
    <CardComp.Back>
      <Underlay />
    </CardComp.Back>
  </CardComp>
)
