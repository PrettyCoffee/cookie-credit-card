import { render } from "preact"

import styled from "styled-components"

const H1 = styled.h1`
  font-family: sans-serif;
`

const App = () => <H1>Hello from Preact and Typescript!</H1>

render(<App />, document.getElementById("root") as Element)
