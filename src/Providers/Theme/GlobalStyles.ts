import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    :visited {
      color: inherit;
    }
  }

:root {
  --shadow-color: 42deg 30% 59%;

  --shadow-elevation-low:
    0.5px 0.5px 0.8px hsl(var(--shadow-color) / 0.34),
    0.8px 0.8px 1.3px -1.2px hsl(var(--shadow-color) / 0.34),
    1.9px 1.9px 3px -2.5px hsl(var(--shadow-color) / 0.34);
  --shadow-elevation-medium:
    0.5px 0.5px 0.8px hsl(var(--shadow-color) / 0.36),
    1.6px 1.6px 2.5px -0.8px hsl(var(--shadow-color) / 0.36),
    4px 4px 6.4px -1.7px hsl(var(--shadow-color) / 0.36),
    9.7px 9.7px 15.4px -2.5px hsl(var(--shadow-color) / 0.36);
  --shadow-elevation-high:
    0.5px 0.5px 0.8px hsl(var(--shadow-color) / 0.34),
    2.8px 2.8px 4.5px -0.4px hsl(var(--shadow-color) / 0.34),
    5.3px 5.3px 8.4px -0.7px hsl(var(--shadow-color) / 0.34),
    8.7px 8.7px 13.8px -1.1px hsl(var(--shadow-color) / 0.34),
    13.8px 13.9px 22px -1.4px hsl(var(--shadow-color) / 0.34),
    21.6px 21.7px 34.4px -1.8px hsl(var(--shadow-color) / 0.34),
    32.9px 32.9px 52.3px -2.1px hsl(var(--shadow-color) / 0.34),
    48.4px 48.5px 77.1px -2.5px hsl(var(--shadow-color) / 0.34);
}
`
