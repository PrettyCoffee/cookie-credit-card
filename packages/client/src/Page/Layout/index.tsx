import { PropsWithChildren } from "../../components/fragments/PropsWithChildren"
import { Wrapper } from "./Wrapper"

const Layout = ({ children }: PropsWithChildren) => (
  <Wrapper>{children}</Wrapper>
)

export default Layout
