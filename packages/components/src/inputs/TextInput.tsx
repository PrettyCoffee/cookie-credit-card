import styled, { css } from "styled-components"

import { IconDefinition, InvertProp, PropsWithChildren } from "../base"
import { getTextStyles, Icon } from "../primitives"

const Input = styled.input<Pick<TextInputProps, "inverted">>`
  ${({ theme, theme: { color, space }, inverted }) => css`
    ${getTextStyles(theme, { inverted })}
    height: 2rem;
    width: 12rem;
    background-color: transparent;
    border: none;
    border-bottom: ${space.smallest} solid ${color.fg.base};
    outline: none;

    :focus-visible {
      color: ${color.fg.alt};
      border-color: ${color.primary};
    }

    ${inverted &&
    css`
      border-color: ${color.bg.base};
      :focus-visible {
        color: ${color.bg.alt};
        border-color: ${color.secondary};
      }
    `}
  `}
`

const WithIcon = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    > ${Input} {
      padding-right: ${space.large};
      z-index: 2;
    }
    > ${Icon.styled} {
      z-index: 1;
      position: absolute;
      right: calc(${space.small} / 2);
    }
  `}
`

const WithOptionalIcon = ({
  children,
  icon,
  inverted,
}: PropsWithChildren<TextInputProps>) => {
  if (!icon) return <>{children}</>
  return (
    <WithIcon>
      {children}
      <Icon icon={icon} inverted={inverted} />
    </WithIcon>
  )
}

export interface TextInputProps extends InvertProp {
  type?: "password" | "text"
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  icon?: IconDefinition
}

export const TextInput = ({
  onChange,
  type = "text",
  icon,
  inverted,
  ...delegated
}: TextInputProps) => (
  <WithOptionalIcon icon={icon} inverted={inverted}>
    <Input
      type={type}
      inverted={inverted}
      onChange={event => onChange?.(event.currentTarget.value)}
      {...delegated}
    />
  </WithOptionalIcon>
)
