import { ComponentChildren } from "preact"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

import { getGlobalStyles } from "./GlobalStyles"
import { getTheme } from "./theme"

type ThemeProviderProps = {
  inverted?: boolean
  children: ComponentChildren
}

export const ThemeProvider = ({
  children,
  inverted = false,
}: ThemeProviderProps) => {
  const GlobalStyles = getGlobalStyles(inverted)
  const theme = getTheme(inverted)
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  )
}
