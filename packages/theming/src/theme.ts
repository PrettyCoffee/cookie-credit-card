import { DefaultTheme } from "styled-components"

const space = {
  smallest: "0.125rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  largest: "3rem",
}

export const theme: DefaultTheme = {
  space,
  color: {
    bg: {
      base: "#fef6e4",
      alt: "#f3d2c1",
      button: "#f582ae",
    },
    fg: {
      base: "#172c66",
      alt: "#001858",
      button: "#001858",
    },
    stroke: "#001858",
    primary: "#f582ae",
    secondary: "#8bd3dd",
  },
}
