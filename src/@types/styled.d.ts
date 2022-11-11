import "styled-components"
import { GetShadowOptions } from "../theme/getShadow"

type ShadowGetter = (color: string, options?: GetShadowOptions) => string

interface Shadows {
  low: ShadowGetter
  medium: ShadowGetter
  high: ShadowGetter
}

interface Spacing {
  smallest: string
  small: string
  medium: string
  large: string
  largest: string
}

// based on happyhues.co

interface Colors {
  bg: {
    base: string //Background
    alt: string //Main
    button: string //Button
  }
  fg: {
    base: string //Paragraph
    alt: string //Headline
    button: string //Button text
  }
  stroke: string //Stroke
  primary: string //Secondary
  secondary: string //Tertiary
  alert: {
    error: string
    success: string
  }
}

export interface Theme {
  space: Spacing
  color: Colors
  shadow: Shadows
  inverted: boolean
}

export declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
