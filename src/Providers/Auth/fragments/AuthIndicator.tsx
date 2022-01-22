import { LockClosedIcon, LockOpen2Icon } from "@radix-ui/react-icons"
import styled, { css } from "styled-components"

import { useAuth } from "../useAuth"

const IconWrapper = styled.div`
  ${({ theme: { color, space } }) => css`
    position: fixed;
    top: ${space.medium};
    right: ${space.medium};
    color: ${color.stroke};
  `}
`

export const AuthIndicator = () => {
  const { authenticated } = useAuth()

  return (
    <IconWrapper>
      {authenticated ? <LockOpen2Icon /> : <LockClosedIcon />}
    </IconWrapper>
  )
}
