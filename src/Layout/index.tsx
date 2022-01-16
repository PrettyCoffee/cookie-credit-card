import { ComponentChildren } from "preact"

import { Wrapper } from "./Wrapper"

type LayoutProps = {
  children: ComponentChildren
}

const Layout = ({ children }: LayoutProps) => <Wrapper>{children}</Wrapper>

export default Layout
