import styled, { css } from "styled-components"

export const Surface = styled.div`
  ${({ theme: { color } }) => css`
    height: 300px;
    width: 500px;
    margin: 3rem;

    background-color: ${color.bg.alt};
    border: 2px solid ${color.stroke};
    border-radius: 1rem;
  `}
`
