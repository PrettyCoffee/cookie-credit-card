import styled, { css } from "styled-components"

export const CardSurface = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;
    height: 300px;
    width: 500px;
    border-radius: ${space.medium};
  `}
`
