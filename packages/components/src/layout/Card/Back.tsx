import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "react-feather"
import styled, { css } from "styled-components"

import { PropsWithChildren } from "../../base"
import { Icon } from "../../primitives"
import { Surface } from "./Surface"

const Layout = styled(Surface)<{
  focused: boolean
  height: number
}>`
  ${({ theme: { color, space }, focused, height }) => css`
    position: relative;
    background-color: ${color.fg.base};
    transition: margin 0.5s ease;
    padding: ${space.largest} 2rem;
    cursor: pointer;

    margin-top: calc(-${height}px + ${space.medium});
    :hover {
      margin-top: calc(-${height}px + 2rem);
    }

    ${focused &&
    css`
      cursor: default;
      &,
      :hover {
        margin-top: -${space.large};
      }
    `}

    ${!height &&
    css`
      margin-top: -50%;
    `}
  `}
`

const PositionedIcon = styled(Icon)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`

const useHeight = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    setHeight(element.clientHeight)
  }, [])

  return [height, ref] as const
}

export const Back = ({ children }: PropsWithChildren) => {
  const [focused, setFocused] = useState(false)
  const [height, ref] = useHeight()

  const getFocus = () => setFocused(true)
  const loseFocus = () => setFocused(false)

  return (
    <Layout
      ref={ref}
      tabIndex={0}
      focused={focused}
      height={height}
      onFocus={getFocus}
      onBlur={loseFocus}
    >
      {children}
      <PositionedIcon icon={ChevronDown} size="large" inverted />
    </Layout>
  )
}
