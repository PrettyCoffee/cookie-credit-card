import styled, { css } from "styled-components"

import { TableProps } from "../Table"
import { Cell } from "./Cell"
import { Row } from "./Row"

const HeaderCell = styled(Cell)`
  ${({ theme: { space } }) => css`
    height: ${space.largest};
  `}
`

export type HeaderProps<Data extends object> = Pick<TableProps<Data>, "columns">

export const Header = <Data extends object>({ columns }: HeaderProps<Data>) => (
  <thead>
    <Row>
      {columns.map(({ header, key, ...styling }) => (
        <HeaderCell key={String(key)} as="th" {...styling}>
          {header}
        </HeaderCell>
      ))}
    </Row>
  </thead>
)
