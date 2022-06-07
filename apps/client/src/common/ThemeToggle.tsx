import { ThemeToggle as Toggle } from "@ccc/components"
import styled from "styled-components"

import { useDarkMode } from "../providers/DarkMode"

const Placement = styled.div`
  position: fixed;
  left: 1.5rem;
  top: 1.5rem;
`

export const ThemeToggle = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Placement>
      <Toggle inverted={darkMode} onInvert={toggleDarkMode} />
    </Placement>
  )
}
