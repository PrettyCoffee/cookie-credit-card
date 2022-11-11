import styled, { css } from "styled-components"

import { CookieHeader } from "./common/CookieHeader"
import { ThemeToggle } from "./common/ThemeToggle"
import { Routes } from "./pages"
import { Providers } from "./providers"

const Layout = styled.div`
  ${({ theme: { color } }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${color.bg.base};
    color: ${color.fg.base};
  `}
`

export const App = () => (
  <Providers>
    <Layout>
      <Routes>
        <ThemeToggle />
        <CookieHeader />
      </Routes>
    </Layout>
  </Providers>
)
