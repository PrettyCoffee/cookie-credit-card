import { isInRange, removeWhitespace } from "./helpers"

const hslRegex = /\((\d{1,3}),(\d{1,3})%,(\d{1,3}%)\)/
export const parseHslString = (
  color: string
): [number, number, number] | null => {
  const hsl = hslRegex.exec(removeWhitespace(color))?.map(Number)
  if (!hsl || hsl.length !== 3) return null
  const [h, s, l] = hsl
  if (!isInRange(h, 0, 360) || !isInRange(s, 0, 100) || !isInRange(l, 0, 100))
    return null
  return [h, s, l]
}
