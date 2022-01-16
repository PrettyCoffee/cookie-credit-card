import styled, { css } from "styled-components"

export const Surface = styled.div`
  ${({ theme: { color, space } }) => css`
    height: 300px;
    width: 500px;
    margin: ${space.largest};

    background-color: ${color.bg.alt};
    border: ${space.smallest} solid ${color.stroke};
    border-radius: ${space.medium};
  `}
`
