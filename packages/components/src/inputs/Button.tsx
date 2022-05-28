import styled, { css } from "styled-components"

import { IconDefinition, InvertProp } from "../base"
import { getTextStyles, Icon } from "../primitives"

const BaseButton = styled.button<InvertProp>`
  ${({ theme, theme: { color, space, shadow }, inverted }) => css`
    ${getTextStyles(theme, { inverted })}
    padding: 0 ${space.small};
    height: 2rem;

    display: inline-flex;
    align-items: center;
    gap: ${space.small};

    border: none;
    border-radius: ${space.smallest};
    cursor: pointer;
    box-shadow: ${shadow.low(color.bg.button)};

    background-color: ${color.bg.button};
    color: ${color.fg.button};
    :hover {
      background-color: ${color.primary};
    }
    :focus-visible {
      outline: ${space.smallest} solid ${color.fg.button};
    }

    ${inverted &&
    css`
      background-color: ${color.fg.button};
      color: ${color.bg.button};
      box-shadow: ${shadow.low(color.fg.button)};
      :hover {
        background-color: ${color.fg.alt};
      }
      :focus-visible {
        outline-color: ${color.bg.button};
      }
    `}
  `}
`

interface ButtonProps extends InvertProp {
  label: string
  icon?: IconDefinition
  onClick?: () => void
}

export const Button = ({ label, icon, ...delegated }: ButtonProps) => (
  <BaseButton {...delegated}>
    {label}
    {icon ? <Icon icon={icon} inheritColor /> : null}
  </BaseButton>
)
