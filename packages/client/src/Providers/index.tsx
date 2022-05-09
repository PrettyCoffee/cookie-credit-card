import { PropsWithChildren } from "../components/fragments/PropsWithChildren"
import Auth from "./Auth"
import Theme from "./Theme"

const Providers = ({ children }: PropsWithChildren) => (
  <Theme>
    <Auth>{children}</Auth>
  </Theme>
)

export default Providers
