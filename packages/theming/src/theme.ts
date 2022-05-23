import { DefaultTheme } from "styled-components"

const space = {
  smallest: "0.125rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  largest: "3rem",
}

// https://coolors.co/161c2e-303f69-455173-87bcde-f582ae-fef6e4-f3d2c1-f09e97

const color: DefaultTheme["color"] = {
  fg: {
    base: "#455173",
    alt: "#303F69",
    button: "#161C2E",
  },
  bg: {
    base: "#fef6e4", // shadow tint: 42deg 30% 59%
    alt: "#f3d2c1",
    button: "#F09E97",
  },
  stroke: "#303F69",
  primary: "#f582ae",
  secondary: "#87BCDE",
}

export const theme: DefaultTheme = {
  space,
  color,
}
