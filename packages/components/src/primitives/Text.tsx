import styled, { css, DefaultTheme } from "styled-components"

import { InvertProp, PropsWithChildren } from "../base"

type TextSize = "small" | "medium" | "large"

const getFontSize = ({ space }: DefaultTheme, size?: TextSize) => {
  if (size === "small") return `calc(${space.medium} * 0.75)`
  if (size === "large") return `calc(${space.medium} * 2)`
  return space.medium
}

export interface TextProps extends InvertProp {
  size?: TextSize
  bold?: boolean
  title?: string
}

export const getTextStyles = (
  theme: DefaultTheme,
  { inverted, size, bold }: TextProps
) => css`
  font-size: ${getFontSize(theme, size)};
  font-weight: ${bold ? "700" : "400"};
  color: ${inverted ? theme.color.bg.base : theme.color.fg.base};
`

const Font = styled.span<TextProps>`
  ${({ theme, ...props }) => css`
    ${getTextStyles(theme, props)}
    margin: 0;
  `}
`

type SizedTextProps = PropsWithChildren<Omit<TextProps, "size">> & {
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Small = (props: SizedTextProps) => <Font size="small" {...props} />
const Medium = (props: SizedTextProps) => <Font size="medium" {...props} />
const Large = (props: SizedTextProps) => <Font size="large" {...props} />

export const Text = Object.assign(Font, { Small, Medium, Large })
