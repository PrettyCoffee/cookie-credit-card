import { parseColorString } from "./parseColorString"
import { rgbToHsl } from "./rgbToHsl"

export const hslFromString = (color: string) => {
  const result = parseColorString(color)
  if (!result) return null

  const { type, value } = result

  if (type === "hsl") return value
  return rgbToHsl(value)
}
