import { PropsWithChildren } from "@ccc/components"
import { ThemeProvider } from "@ccc/theming"

import { AuthProvider } from "./auth"
import { CookieProvider } from "./cookies"
import { DarkModeConsumer, DarkModeProvider } from "./DarkMode"

export const Providers = ({ children }: PropsWithChildren) => (
  <DarkModeProvider>
    <DarkModeConsumer>
      {([darkMode]) => (
        <ThemeProvider inverted={darkMode}>
          <CookieProvider>
            <AuthProvider>{children}</AuthProvider>
          </CookieProvider>
        </ThemeProvider>
      )}
    </DarkModeConsumer>
  </DarkModeProvider>
)
