import { useMemo } from "preact/hooks"

import { TableProps } from "../Table"
import { filterData } from "../utils/filterData"
import { BodyCell } from "./BodyCell"
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
            <BodyCell key={String(key)} value={row[key]} {...styling} />
          ))}
        </Row>
      ))}
    </tbody>
  )
}
