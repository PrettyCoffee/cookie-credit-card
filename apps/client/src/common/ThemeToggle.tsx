import { Icon, VisuallyHidden } from "@ccc/components"
import { Moon, Sun } from "react-feather"
import styled, { css } from "styled-components"

import { useDarkMode } from "../providers/DarkMode"

const Button = styled.button`
  ${({ theme: { color } }) => css`
    position: fixed;
    left: 0.5rem;
    top: 0.5rem;
    height: 2rem;
    width: 2rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: ${color.fg.base};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  `}
`

export const ThemeToggle = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <Button role="switch" aria-checked={darkMode} onClick={toggleDarkMode}>
      <Icon icon={darkMode ? Moon : Sun} />
      <VisuallyHidden>
        Toggle to {darkMode ? "light" : "dark"} colors
      </VisuallyHidden>
    </Button>
  )
}
