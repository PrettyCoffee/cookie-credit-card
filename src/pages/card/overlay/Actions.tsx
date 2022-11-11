import { Minus, Plus } from "react-feather"
import styled, { css } from "styled-components"

import { IconButton } from "../../../components"

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

export const Actions = ({ onAdd, onEat }: ActionsProps) => (
  <Wrapper>
    <IconButton label="Add a cookie!" onClick={onAdd} icon={Plus} />
    <IconButton label="Eat a cookie!" onClick={onEat} icon={Minus} />
  </Wrapper>
)
