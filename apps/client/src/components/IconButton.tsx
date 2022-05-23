import { IconDefinition } from "@ccc/components"
import styled, { css } from "styled-components"

const Button = styled.button`
  ${({ theme: { color } }) => css`
    position: relative;
    height: 1.75rem;
    width: 1.75rem;
    padding: 0;

    display: inline-flex;
    align-items: center;

    border-radius: 50%;
    color: ${color.stroke};
    background-color: transparent;
    border: 1px solid ${color.bg.base};
    cursor: pointer;
    overflow: hidden;

    :hover,
    :focus-visible {
      background-color: ${color.primary};
      border-color: ${color.stroke};
    }
  `}
`

const Label = styled.span`
  width: max-content;
  gap: 0.5rem;
  padding-left: 5px;

  position: absolute;
  display: flex;
  align-items: center;

  ${Button}:hover > & {
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  > svg {
    height: 1rem;
    width: 1rem;
  }
`

const LeftLabel = styled(Label)`
  transform: translateX(100%);
  animation-name: leftRotate;

  @keyframes leftRotate {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const RightLabel = styled(Label)`
  animation-name: rightRotate;

  @keyframes rightRotate {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    50.01% {
      transform: translateX(100%);
    }
  }
`

type IconButtonProps = {
  icon: IconDefinition
  label: string
  onClick?: () => void
}

export const IconButton = ({ icon: Icon, label, onClick }: IconButtonProps) => (
  <Button onClick={onClick}>
    <LeftLabel>
      <Icon />
      {label}
    </LeftLabel>
    <RightLabel>
      <Icon />
      {label}
    </RightLabel>
  </Button>
)
