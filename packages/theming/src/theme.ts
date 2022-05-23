import { DefaultTheme } from "styled-components"

const shadow = {
  low: "var(--shadow-elevation-low)",
  medium: "var(--shadow-elevation-medium)",
  high: "var(--shadow-elevation-high)",
}

const space: DefaultTheme["space"] = {
  smallest: "0.125rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  largest: "3rem",
}

// https://coolors.co/161c2e-303f69-455173-87bcde-f582ae-fef6e4-f3d2c1-f09e97

const peach: DefaultTheme["color"] = {
  fg: {
    base: "#455173", // inverted shadow tint: 225deg 31% 20%
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

const invertColors = ({bg, fg, primary, secondary}: DefaultTheme["color"]) => ({
  fg: bg,
  bg: fg,
  stroke: bg.alt,
  primary,
  secondary,
})

export const getTheme = (inverted: boolean): DefaultTheme => ({
  space,
  shadow,
  color: inverted ? invertColors(peach) : peach,
})

/*

// https://coolors.co/495d63-383d66-424874-475ae6-85eadd-dcd6f7-a6b1e1-d6e5e3

const pastel: DefaultTheme["color"] = {
  fg: {
    base: "#424874",
    alt: "#383D66",
    button: "#495D63",
  },
  bg: {
    base: "#DCD6F7",
    alt: "#A6B1E1",
    button: "#D6E5E3",
  },
  stroke: "#383D66",
  primary: "#475AE6",
  secondary: "#85EADD",
}

const pastelInverted: DefaultTheme["color"] = {
  fg: {
    base: "#DCD6F7",
    alt: "#A6B1E1",
    button: "#D6E5E3",
  },
  bg: {
    base: "#424874",
    alt: "#383D66",
    button: "#495D63",
  },
  stroke: "#A6B1E1",
  primary: "#85EADD",
  secondary: "#475AE6",
}
*/
