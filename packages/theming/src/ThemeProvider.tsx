import { ComponentChildren } from "preact"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

import { GlobalStyles } from "./GlobalStyles"
import { theme } from "./theme"

type ThemeProviderProps = {
  children: ComponentChildren
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
)
