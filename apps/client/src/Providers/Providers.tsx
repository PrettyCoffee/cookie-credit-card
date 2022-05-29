import { PropsWithChildren } from "@ccc/components"
import { ThemeProvider } from "@ccc/theming"

import { AuthProvider } from "./auth"
import { DarkModeConsumer, DarkModeProvider } from "./DarkMode"

export const Providers = ({ children }: PropsWithChildren) => (
  <DarkModeProvider>
    <DarkModeConsumer>
      {([darkMode]) => (
        <ThemeProvider inverted={darkMode}>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      )}
    </DarkModeConsumer>
  </DarkModeProvider>
)
