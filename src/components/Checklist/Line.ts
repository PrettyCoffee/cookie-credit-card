import styled, { css } from "styled-components"

type LineProps = {
  kind?: "vertical" | "diagonal"
}

export const Line = styled.span<LineProps>`
  ${({ theme: { color }, kind }) => css`
    display: inline-block;

    margin: 0.125em;
    width: 0.05em;
    height: 0.7em;

    background-color: ${color.stroke};

    ${kind === "diagonal" &&
    css`
      position: absolute;
      transform: rotate(70deg);
      height: 1.4em;
    `}
  `}
`
