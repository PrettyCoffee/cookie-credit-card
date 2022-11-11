import styled from "styled-components"

import { Body } from "./fragments/Body"
import { Header } from "./fragments/Header"

const Container = styled.table`
  border-collapse: collapse;
`

export interface Column<Data extends object> {
  key: keyof Data
  header: string
  alignment?: "left" | "right" | "center"
  width?: number | string
}

export interface TableProps<Data extends object> {
  data: Data[]
  columns: Column<Data>[]
  filter?: ((data: Data) => boolean) | string
}

export const Table = <Data extends object>(props: TableProps<Data>) => {
  return (
    <Container>
      <Header {...props} />
      <Body {...props} />
    </Container>
  )
}
