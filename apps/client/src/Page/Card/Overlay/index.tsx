import { useState } from "react"

import { Actions } from "./Actions"
import { Cookie } from "./Cookie"
import { Details } from "./Details"
import { Name } from "./Name"
import { Surface } from "./Surface"

const Overlay = () => {
  const [cookies, setCookies] = useState(0)
  const handleAdd = () => setCookies(cookies + 1)
  const handleEat = () => cookies > 0 && setCookies(cookies - 1)
  return (
    <Surface>
      <Cookie />
      <Details cookies={cookies} />
      <Name />
      <Actions onAdd={handleAdd} onEat={handleEat} />
    </Surface>
  )
}

export default Overlay