import { useState, useEffect } from "preact/hooks"
import { ChevronDown } from "react-feather"
import styled, { css } from "styled-components"

import { PropsWithChildren, useRefHeight } from "../../base"
import { Icon } from "../../primitives"
import { Surface } from "./Surface"

const Layout = styled(Surface)<{
  focused: boolean
  height: number | null
  didMount: boolean
}>`
  ${({ theme: { color, space }, focused, height, didMount }) => css`
    position: relative;
    background-color: ${color.fg.base};
    padding: ${space.largest} 2rem;
    cursor: pointer;
    margin-top: -100%;

    ${didMount &&
    css`
      transition: margin 0.5s ease;
    `}

    ${height !== null &&
    css`
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

const useDidMount = (timeOffset = 0) => {
  const [didMount, setDidMount] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setDidMount(true)
    }, timeOffset)
  }, [])
  return didMount
}

export const Back = ({ children }: PropsWithChildren) => {
  const [focused, setFocused] = useState(false)
  const { height, ref } = useRefHeight()
  const didMount = useDidMount(1)

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
      didMount={didMount}
    >
      <>
        {children}
        <PositionedIcon icon={ChevronDown} size="large" inverted />
      </>
    </Layout>
  )
}
