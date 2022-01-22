import styled, { css } from "styled-components"

import { CardSurface } from "../CardSurface"

const shadowColor = "hsl(225deg 88% 12% / 0.36)"

export const Surface = styled(CardSurface)`
  ${({ theme: { color } }) => css`
    position: absolute;
    z-index: 1;
    gap: 2rem;
    background-color: ${color.bg.alt};
    display: flex;
    align-items: center;
    padding-bottom: 1.5rem;
    padding-top: 0;
    padding-left: 2rem;
    box-shadow: 0px 0.3px 0.3px ${shadowColor},
      0px 1.1px 1.2px -0.8px ${shadowColor},
      -0.1px 2.8px 3.2px -1.7px ${shadowColor},
      -0.1px 6.8px 7.7px -2.5px ${shadowColor};
  `}
`
