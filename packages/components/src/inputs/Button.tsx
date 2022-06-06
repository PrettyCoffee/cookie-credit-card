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

    border-radius: ${space.smallest};
    box-shadow: ${shadow.low(color.bg.button)};

    background-color: ${color.bg.button};
    color: ${color.fg.alt};
    :hover:enabled {
      background-color: ${color.primary};
    }
    :focus-visible:enabled {
      outline: ${space.smallest} solid ${color.fg.button};
    }
    :disabled {
      cursor: default;
      filter: grayscale(50%);
      opacity: 0.5;
    }

    ${inverted &&
    css`
      background-color: ${color.fg.button};
      color: ${color.bg.alt};
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
  disabled?: boolean
}

export const Button = ({ label, icon, ...delegated }: ButtonProps) => (
  <BaseButton {...delegated}>
    {label}
    {icon ? <Icon icon={icon} inheritColor /> : null}
  </BaseButton>
)
