import { ThemeProvider } from "styled-components"

import { PropsWithChildren } from "../../components/fragments/PropsWithChildren"
import { GlobalStyles } from "./GlobalStyles"
import { theme } from "./theme"

const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
