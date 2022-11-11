import styled, { css } from "styled-components"

import { Icon, IconProps } from "../components"

const Avatar = styled(Icon)`
  ${({ theme: { color, shadow } }) => css`
    height: 100px;
    width: 100px;
    display: flex;
    border-radius: 50%;
    border: 2px solid ${color.fg.base};

    color: ${color.fg.alt};
    filter: ${shadow.low(color.bg.alt, { usage: "drop-shadow" })};
  `}
`

type AvatarIconProps = Omit<IconProps, "size">

export const AvatarIcon = (props: AvatarIconProps) => (
  <Avatar size="largest" {...props} />
)
