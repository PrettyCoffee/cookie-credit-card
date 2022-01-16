import { ComponentChildren } from "preact"

import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "./GlobalStyles"
import { theme } from "./theme"

type ThemeProps = {
  children: ComponentChildren
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
