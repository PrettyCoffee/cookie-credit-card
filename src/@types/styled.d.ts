import "styled-components"

// based on happyhues.co

interface Theme {
  color: {
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
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
