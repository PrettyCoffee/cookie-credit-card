import { parseHexString } from "./parseHexString"
import { parseHslString } from "./parseHslString"
import { parseRgbString } from "./parseRgbString"

interface RgbResult {
  type: "rgb"
  value: [number, number, number]
}

interface HslResult {
  type: "hsl"
  value: [number, number, number]
}

export const parseColorString = (
  color: string
): RgbResult | HslResult | null => {
  let type: "rgb" | "hsl" | null = null
  let value: [number, number, number] | null = null

  if (color.startsWith("#")) {
    type = "rgb"
    value = parseHexString(color)
  }

  if (color.startsWith("rgb")) {
    type = "rgb"
    value = parseRgbString(color)
  }

  if (color.startsWith("hsl")) {
    type = "hsl"
    value = parseHslString(color)
  }

  if (!type || !value) return null

  return { type, value }
}
