import { Lock, Unlock } from "react-feather"
import styled, { css } from "styled-components"

import { useAuth } from "../useAuth"

const IconWrapper = styled.div`
  ${({ theme: { color, space } }) => css`
    position: fixed;
    top: ${space.medium};
    right: ${space.medium};
    color: ${color.stroke};
    > svg {
      width: 1rem;
      height: 1rem;
    }
  `}
`

export const AuthIndicator = () => {
  const { authenticated } = useAuth()

  return <IconWrapper>{authenticated ? <Unlock /> : <Lock />}</IconWrapper>
}
