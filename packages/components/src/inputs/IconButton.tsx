import styled, { css } from "styled-components"

import { IconDefinition, VisuallyHidden } from "../base"
import { Icon } from "../primitives"

const Button = styled.button`
  ${({ theme: { color } }) => css`
    height: 2rem;
    width: 2rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: ${color.fg.button};

    :hover,
    :active {
      background-color: ${color.bg.button};
    }
    :active {
      opacity: 0.8;
    }
    :focus-visible {
      outline: 1px solid ${color.fg.button};
      background-color: ${color.bg.button};
    }
  `}
`

interface IconButtonProps {
  icon: IconDefinition
  label: string
  onClick: () => void
}

export const IconButton = ({ icon, label, onClick }: IconButtonProps) => (
  <Button title={label} onClick={onClick}>
    <Icon icon={icon} />
    <VisuallyHidden>{label}</VisuallyHidden>
  </Button>
)
