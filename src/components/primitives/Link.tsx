import styled, { css } from "styled-components"

import { InvertProp } from "../base"
import { getTextStyles } from "./Text"

const BaseLink = styled.a<InvertProp>`
  ${({ theme, theme: { color }, inverted }) => css`
    ${getTextStyles(theme, { inverted, size: "medium" })}
    outline: none;

    cursor: pointer;
    :hover,
    :focus-visible {
      text-decoration: underline ${inverted ? color.secondary : color.primary};
    }
  `}
`

interface LinkProps extends InvertProp {
  label: string
  href?: string
  onClick?: () => void
}

export const Link = ({ label, ...delegated }: LinkProps) => (
  <BaseLink tabIndex={0} {...delegated}>
    {label}
  </BaseLink>
)
