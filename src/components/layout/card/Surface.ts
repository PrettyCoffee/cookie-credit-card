import styled, { css } from "styled-components"

export const Surface = styled.div`
  ${({ theme: { space } }) => css`
    isolation: isolate;
    position: relative;
    border-radius: ${space.medium};
    width: 100%;
  `}
`
