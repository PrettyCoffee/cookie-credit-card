import { KeyboardEvent } from "react"
import styled, { css } from "styled-components"

import { IconDefinition, InvertProp, PropsWithChildren } from "../base"
import { getTextStyles, Icon, Text } from "../primitives"

interface InputProps extends InvertProp {
  fixedWidth?: boolean
  alert?: "error" | "success"
}

const Input = styled.input<InputProps>`
  ${({
    theme,
    theme: { color, space, shadow },
    inverted,
    fixedWidth,
    alert,
  }) => css`
    ${getTextStyles(theme, { inverted })}
    height: 2rem;
    width: ${fixedWidth ? "12rem" : "100%"};
    background-color: transparent;
    border: none;
    border-bottom: ${space.smallest} solid ${color.fg.base};
    outline: none;

    :focus-visible {
      color: ${color.fg.alt};
      border-color: ${color.primary};
      box-shadow: ${shadow.low(color.bg.alt, { direction: "vertical" })};
    }

    :disabled {
      opacity: 0.5;
    }

    ${inverted &&
    css`
      border-color: ${color.bg.base};
      :focus-visible {
        color: ${color.bg.alt};
        box-shadow: ${shadow.low(color.fg.alt, { direction: "vertical" })};
        border-color: ${color.secondary};
      }
    `}

    ${alert &&
    css`
      border-color: ${color.alert[alert]}!important;
    `}
  `}
`

const WithIcon = styled.span`
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
      margin: auto 0;
    }
  `}
`

interface IconProps extends InvertProp {
  icon?: IconDefinition
}

const WithOptionalIcon = ({
  children,
  icon,
  inverted,
}: PropsWithChildren<IconProps>) => {
  if (!icon) return <>{children}</>
  return (
    <WithIcon>
      <>
        {children}
        <Icon icon={icon} inverted={inverted} />
      </>
    </WithIcon>
  )
}

const WithLabel = styled.label<LabelProps>`
  ${({ fixedWidth }) => css`
    display: inline-flex;
    flex-direction: column;
    width: ${fixedWidth ? "fit-content" : "100%"};
  `}
`

interface LabelProps extends InputProps {
  label?: string
}

const WithOptionalLabel = ({
  children,
  label,
  inverted,
  fixedWidth,
}: PropsWithChildren<LabelProps>) => {
  if (!label) return <>{children}</>
  return (
    <WithLabel fixedWidth={fixedWidth}>
      <>
        <Text.Small inverted={inverted}>{label}</Text.Small>
        {children}
      </>
    </WithLabel>
  )
}

export interface TextInputProps extends InputProps, LabelProps, IconProps {
  type?: "password" | "text"
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  autoComplete?: "on" | "off" | "username" | "current-password"
  disabled?: boolean
  onKeyDown?: (e: KeyboardEvent) => void
}

export const TextInput = ({
  label,
  icon,
  onChange,
  type = "text",
  inverted,
  fixedWidth,
  autoComplete = "off",
  ...delegated
}: TextInputProps) => (
  <WithOptionalLabel label={label} inverted={inverted} fixedWidth={fixedWidth}>
    <WithOptionalIcon icon={icon} inverted={inverted}>
      <Input
        type={type}
        inverted={inverted}
        fixedWidth={fixedWidth}
        onChange={event => onChange?.(event.currentTarget.value)}
        autoComplete={autoComplete}
        {...delegated}
      />
    </WithOptionalIcon>
  </WithOptionalLabel>
)
