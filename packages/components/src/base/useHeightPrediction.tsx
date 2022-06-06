import { useState, useEffect, useMemo } from "react"

import { PropsWithChildren } from "./PropsWithChildren"

interface HiddenRenderProps {
  unmount?: boolean
  setRef: (element: HTMLDivElement | null) => void
}
const HiddenRender = ({
  children,
  unmount,
  setRef,
}: PropsWithChildren<HiddenRenderProps>) => {
  if (unmount) return <>{children}</>
  return (
    <div ref={element => setRef(element)} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

const createHiddenRender =
  (createProps: HiddenRenderProps) =>
  ({ children }: PropsWithChildren) =>
    <HiddenRender {...createProps}>{children}</HiddenRender>

export const useHeightPrediction = () => {
  const [hidden, setHidden] = useState<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    const newHeight = hidden?.clientHeight
    if (newHeight) setHeight(newHeight)
  }, [hidden])

  const HeightPrediction = useMemo(
    () =>
      createHiddenRender({
        setRef: setHidden,
        unmount: height !== null,
      }),
    [height]
  )

  return { height, HeightPrediction }
}
