import { formatDateTime } from "../utils/formatDateTime"
import { Cell, CellProps } from "./Cell"

const StringCell = ({ value, ...cell }: BodyCellProps<string>) => (
  <Cell {...cell}>{value}</Cell>
)

const NumberCell = ({
  value,
  alignment = "right",
  ...cell
}: BodyCellProps<number>) => (
  <Cell alignment={alignment} {...cell}>
    {value}
  </Cell>
)

const DateCell = ({
  value,
  alignment = "center",
  ...cell
}: BodyCellProps<Date>) => {
  const { date, dateTime } = formatDateTime(value)
  return (
    <Cell alignment={alignment} title={dateTime} {...cell}>
      {date}
    </Cell>
  )
}

interface BodyCellProps<T extends unknown> extends CellProps {
  value: T
}
export const BodyCell = <T extends unknown>({
  value,
  ...props
}: BodyCellProps<T>) => {
  // number before date since all numbers can be used as dates
  if (typeof value === "number") return <NumberCell value={value} {...props} />

  const date = new Date(String(value))
  if (!isNaN(date.valueOf())) return <DateCell value={date} {...props} />

  // string after date, to be able to process date strings
  if (typeof value === "string") return <StringCell value={value} {...props} />

  console.error(
    "Value type could not be determined in Table Cell component",
    value
  )
  return <>Type error</>
}
