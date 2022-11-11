import { useCookies } from "../../../providers"
import { Actions } from "./Actions"
import { Cookie } from "./Cookie"
import { Details } from "./Details"
import { Name } from "./Name"

export const Overlay = () => {
  const [cookies, setCookies] = useCookies()

  const handleAdd = () => setCookies(cookies + 1)
  const handleEat = () => cookies > 0 && setCookies(cookies - 1)

  return (
    <>
      <Cookie />
      <Details />
      <Name />
      <Actions onAdd={handleAdd} onEat={handleEat} />
    </>
  )
}
