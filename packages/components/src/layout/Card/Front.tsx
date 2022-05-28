import styled, { css } from "styled-components"

import { Surface } from "./Surface"

export const Front = styled(Surface)`
  ${({ theme: { color, shadow } }) => css`
    z-index: 1;
    background-color: ${color.bg.alt};
    box-shadow: ${shadow.medium(color.fg.base, { direction: "vertical" })};
  `}
`
