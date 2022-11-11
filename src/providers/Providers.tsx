import { PropsWithChildren } from "../components"
import { ThemeProvider } from "../theme"
import { CookieProvider } from "./CookieContext"
import { DarkModeConsumer, DarkModeProvider } from "./DarkMode"
import { UserProvider } from "./UserContext"

export const Providers = ({ children }: PropsWithChildren) => (
  <DarkModeProvider>
    <DarkModeConsumer>
      {([darkMode]) => (
        <ThemeProvider inverted={darkMode}>
          <CookieProvider>
            <UserProvider>{children}</UserProvider>
          </CookieProvider>
        </ThemeProvider>
      )}
    </DarkModeConsumer>
  </DarkModeProvider>
)
