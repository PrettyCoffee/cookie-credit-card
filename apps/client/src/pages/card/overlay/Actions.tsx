import { Minus, Plus } from "react-feather"
import styled, { css } from "styled-components"

import { IconButton } from "@ccc/components"
import { useAuth } from "../../../providers/auth"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    position: absolute;
    bottom: ${space.medium};
    right: 2rem;

    display: flex;
    gap: ${space.small};
  `}
`

type ActionsProps = {
  onAdd: () => void
  onEat: () => void
}

export const Actions = ({ onAdd, onEat }: ActionsProps) => {
  const { authenticated } = useAuth()
  return (
    <Wrapper>
      {authenticated && (
        <IconButton label="Add a cookie!" onClick={onAdd} icon={Plus} />
      )}
      <IconButton label="Eat a cookie!" onClick={onEat} icon={Minus} />
    </Wrapper>
  )
}
