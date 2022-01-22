import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  ${({ theme: { color } }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${color.bg.base};
    color: ${color.fg.base};
  `}
`
