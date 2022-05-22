import "styled-components"

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
}

export declare module "styled-components" {
  export interface DefaultTheme {
    space: Spacing
    color: Colors
  }
}
