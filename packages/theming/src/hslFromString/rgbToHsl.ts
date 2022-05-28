export const rgbToHsl = ([r, g, b]: [number, number, number]): [
  number,
  number,
  number
] => {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min
  const l = (max + min) / 2

  let h = 0,
    s = 0
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
    }
    h /= 6
  }

  return [Math.ceil(h * 360), Math.ceil(s * 100), Math.ceil(l * 100)]
}
