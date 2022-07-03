import styled, { css } from "styled-components"

export const Row = styled.tr`
  ${({ theme: { color, inverted } }) => css`
    border-bottom: 1px solid ${color.fg.base};
    tbody > &:hover {
      background-color: ${inverted ?
        "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.05)"};
    }
  `}
`
