export const removeWhitespace = (color: string) => color.replace(/\s*/g, "")

export const isInRange = (value: number, min: number, max: number) =>
  value >= min && value <= max
