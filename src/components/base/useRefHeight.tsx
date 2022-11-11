import { useState } from "preact/hooks"

export const useRefHeight = () => {
  const [height, setHeight] = useState<number | null>(null)

  const ref = (ref: HTMLDivElement) => {
    const newHeight = ref?.clientHeight
    if (newHeight !== height) setHeight(newHeight)
  }

  return { height, ref }
}
