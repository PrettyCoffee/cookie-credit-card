import { useMemo } from "preact/hooks"

import { filterData } from "../filterData"
import { TableProps } from "../Table"
import { Cell } from "./Cell"
import { Row } from "./Row"

export const Body = <Data extends object>({
  data,
  columns,
  filter,
}: TableProps<Data>) => {
  const filteredData = useMemo(() => {
    if (typeof filter === "string") return filterData(data, filter)
    if (typeof filter === "function") return data.filter(filter)
    return data
  }, [data, filter])

  return (
    <tbody>
      {filteredData.map((row, index) => (
        <Row key={index}>
          {columns.map(({ key, ...styling }) => (
            <Cell key={String(key)} {...styling}>
              {row[key]}
            </Cell>
          ))}
        </Row>
      ))}
    </tbody>
  )
}
