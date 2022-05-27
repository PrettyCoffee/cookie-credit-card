import styled, { css, DefaultTheme } from "styled-components"

type SpaceKey = keyof DefaultTheme["space"]
type Side = "left" | "right" | "top" | "bottom"
type SpacingProps = {
  top?: SpaceKey
  right?: SpaceKey
  bottom?: SpaceKey
  left?: SpaceKey
  horizontal?: SpaceKey
  vertical?: SpaceKey
  each?: SpaceKey
  marginLeftAuto?: boolean
  marginRightAuto?: boolean
  inline?: boolean
}

const getSpace = (side: Side, props: SpacingProps, { space }: DefaultTheme) => {
  const explicit = props[side]
  if (explicit) return space[explicit]

  const isXSide = side === "left" || side === "right"
  if (isXSide && props.horizontal) return space[props.horizontal]
  const isYSide = side === "top" || side === "bottom"
  if (isYSide && props.vertical) return space[props.vertical]

  if (props.each) return space[props.each]

  return 0
}

export const Spacing = styled.div<SpacingProps>`
  ${({ theme, inline, marginLeftAuto, marginRightAuto, ...props }) => css`
    ${inline && "display: inline-block;"}
    padding-top: ${getSpace("top", props, theme)};
    padding-bottom: ${getSpace("bottom", props, theme)};
    padding-left: ${getSpace("left", props, theme)};
    padding-right: ${getSpace("right", props, theme)};

    ${marginLeftAuto && "margin-left: auto;"}
    ${marginRightAuto && "margin-right: auto;"}
  `}
`
