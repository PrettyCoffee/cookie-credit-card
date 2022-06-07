import styled, { css } from "styled-components"
import {useMemo} from "preact/hooks"

import { IconDefinition } from "../../base"
import { IconButton } from "../../inputs"

const Container = styled.header`
  ${({ theme: { color, shadow } }) => css`
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;

    border-radius: 1.5rem;
    padding: 0.5rem;
    background-color: ${color.bg.alt};
    box-shadow: ${shadow.medium(color.bg.base)};
  `}
`

interface HeaderAction {
  icon: IconDefinition
  label: string
  onClick: () => void
  condition: () => boolean
}

interface HeaderProps {
  actions: HeaderAction[]
}

export const Header = ({ actions }: HeaderProps) => {
  const availableActions = useMemo(
    () => actions.filter(action => action.condition()),
    [actions]
  )
  return (
  <Container>
    {availableActions.map(props => (
      <IconButton key={props.label} {...props} />
    ))}
  </Container>
)
}
