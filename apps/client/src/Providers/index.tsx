import { ThemeProvider } from "@ccc/theming"

import { PropsWithChildren } from "../components/fragments/PropsWithChildren"
import Auth from "./Auth"

const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <Auth>{children}</Auth>
  </ThemeProvider>
)

export default Providers
