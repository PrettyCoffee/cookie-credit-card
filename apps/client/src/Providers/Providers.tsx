import { ThemeProvider } from "@ccc/theming"

import { PropsWithChildren } from "../components/fragments/PropsWithChildren"
import { AuthProvider } from "./auth"

export const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
)
