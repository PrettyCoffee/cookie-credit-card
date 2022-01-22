import { LineSet } from "./LineSet"

export type CountProp = { count: number }

const Checklist = ({ count }: CountProp) => {
  const list = []
  for (let rest = count; rest > 0; rest -= 5)
    list.push(<LineSet key={rest} count={rest > 5 ? 5 : rest} />)

  return <>{list}</>
}

export default Checklist
