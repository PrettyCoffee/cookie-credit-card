const expand = ([r, g, b]: string[]) => [r, r, g, g, b, b]

const getHexPairs = ([r1, r2, g1, g2, b1, b2]: string[]) => [
  r1 + r2,
  g1 + g2,
  b1 + b2,
]

const parseHexPair = ([a, b]: string) => {
  const int = parseInt(a + b, 16)
  if (isNaN(int)) return null
  return int
}

const hexToRgb = (hex: string[]): [number, number, number] | null => {
  const [r, g, b] = getHexPairs(hex).map(parseHexPair)
  if (!r || !g || !b) return null
  return [r, g, b]
}

export const parseHexString = (
  color: string
): [number, number, number] | null => {
  const [hash, ...hex] = color

  if (hash !== "#") return null
  if (hex.length !== 3 && hex.length !== 6) return null

  const sixDigitHex = hex.length === 3 ? expand(hex) : hex
  return hexToRgb(sixDigitHex)
}
