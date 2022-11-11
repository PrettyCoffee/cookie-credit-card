import styled from "styled-components"

import { CountProp } from "./Checklist"
import { Line } from "./Line"

const Wrapper = styled.span`
  display: inline-flex;
  position: relative;

  justify-content: center;
  align-items: center;

  font-size: 30px;
  margin: 0 0.25rem;
`

const lines = [
  <Line key="1" />,
  <Line key="2" />,
  <Line key="3" />,
  <Line key="4" />,
  <Line key="5" kind="diagonal" />,
]

export const LineSet = ({ count }: CountProp) => (
  <Wrapper>{[...lines].slice(0, count)}</Wrapper>
)
