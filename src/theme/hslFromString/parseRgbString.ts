import { isInRange, removeWhitespace } from "./helpers"

const rgbRegex = /\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/
const isInRgbRange = (num: number) => isInRange(num, 0, 255)

export const parseRgbString = (
  color: string
): [number, number, number] | null => {
  const rgb = rgbRegex.exec(removeWhitespace(color))?.map(Number)
  if (!rgb || rgb.length !== 3) return null
  const [r, g, b] = rgb
  if (!isInRgbRange(r) || !isInRgbRange(g) || !isInRgbRange(b)) return null
  return [rgb[0], rgb[1], rgb[2]]
}
