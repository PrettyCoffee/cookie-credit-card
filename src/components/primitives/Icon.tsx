import styled, { DefaultTheme, css } from "styled-components"

import { IconDefinition, InvertProp } from "../base"

type IconSize = "medium" | "large" | "largest"

const getSize = ({ space }: DefaultTheme, size?: IconSize) =>
  space[size || "medium"]

const StyledIcon = styled.span<Omit<IconProps, "icon">>`
  ${({ theme, theme: { color }, inverted, size, inheritColor }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: ${inheritColor
      ? "inherit"
      : inverted
      ? color.bg.base
      : color.fg.base};

    &,
    > svg {
      height: ${getSize(theme, size)};
      width: ${getSize(theme, size)};
    }
  `}
`

export interface IconProps extends InvertProp {
  icon: IconDefinition
  size?: IconSize
  inheritColor?: boolean
}

const RenderedIcon = ({ icon: Icon, ...delegated }: IconProps) => (
  <StyledIcon {...delegated}>
    <Icon />
  </StyledIcon>
)

export const Icon = Object.assign(RenderedIcon, { styled: StyledIcon })
