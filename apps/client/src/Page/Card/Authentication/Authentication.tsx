import { Icon } from "@ccc/components"
import { useState } from "react"
import { ChevronDown } from "react-feather"
import styled, { css } from "styled-components"

import { CardSurface } from "../CardSurface"
import { AuthInput } from "./AuthInput"

const Surface = styled(CardSurface)<{ focused: boolean }>`
  ${({ theme: { color }, focused }) => css`
    isolation: isolate;
    position: relative;
    background-color: ${color.fg.base};
    margin-top: ${focused ? "6rem" : "1rem"};
    transition: 0.5s ease;
    cursor: pointer;

    ${!focused &&
    css`
      :hover {
        margin-top: 2rem;
      }
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

export const Authentication = () => {
  const [focused, setFocused] = useState(false)

  const getFocus = () => setFocused(true)
  const loseFocus = () => setFocused(false)

  return (
    <Surface
      tabIndex={0}
      focused={focused}
      onFocus={getFocus}
      onBlur={loseFocus}
    >
      <AuthInput />
      <PositionedIcon icon={ChevronDown} size="large" inverted />
    </Surface>
  )
}
