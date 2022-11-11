import { Back } from "./Back"
import { Card as Wrapper } from "./Card"
import { Front } from "./Front"

export const Card = Object.assign(Wrapper, { Front, Back })
