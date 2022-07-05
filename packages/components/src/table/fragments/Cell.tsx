import styled, { css } from "styled-components"

import { Column } from "../Table"

const getWidth = (width?: number | string) => {
  if (typeof width === "number") return `width: ${width}px;`
  if (typeof width === "string") return `width: ${width};`
  return ""
}

export type CellProps = Pick<Column<{}>, "alignment" | "width">
export const Cell = styled.td<CellProps>`
  ${({ theme: { color, space }, alignment = "left", width }) => css`
    height: 2rem;
    padding: 0 ${space.medium};
    color: ${color.fg.base};
    text-align: ${alignment};
    ${getWidth(width)}
  `}
`
