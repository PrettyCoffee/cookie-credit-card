import { PropsWithChildren } from "@ccc/components"
import { ThemeProvider } from "@ccc/theming"

import { AuthProvider } from "./auth"

export const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
)
