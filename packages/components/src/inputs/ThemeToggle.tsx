import { useEffect, useRef } from "preact/hooks"
import { Moon, Sun } from "react-feather"
import styled, { css, keyframes } from "styled-components"

import { InvertProp, VisuallyHidden } from "../base"
import { Icon } from "../primitives"

const animateIn = keyframes`
  from {
    transform: rotate(-90deg);
  } to {
    transform: rotate(90deg);
  }
`

const animateOut = keyframes`
  from {
    transform: rotate(90deg);
  } to {
    transform: rotate(270deg);
  }
`

const Container = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;

  :focus-visible {
    outline: 1px solid ${({ theme }) => theme.color.fg.button};
  }
`

const getAnimation = (active: boolean) => {
  const outer = active ? animateIn : animateOut
  const inner = active ? animateOut : animateIn
  return css`
    animation: 1s ${outer} forwards;
    svg {
      animation: 1s ${inner} forwards;
    }
  `
}

const Axis = styled.span<{ active: boolean; didMount: boolean }>`
  ${({ active, didMount }) => css`
    position: absolute;
    bottom: -10px;
    display: flex;
    justify-content: space-between;
    width: 50px;
    ${!didMount &&
    css`
      transform: rotate(${active ? "90deg" : "-90deg"});
      svg {
        transform: rotate(${active ? "-90deg" : "90deg"});
      }
    `}
    ${didMount && getAnimation(active)}
  `}
`

const useDidMountRef = () => {
  const ref = useRef(false)
  useEffect(() => {
    ref.current = true
  }, [])
  return ref.current
}

interface ThemeToggleProps extends Required<InvertProp> {
  onInvert: () => void
}

export const ThemeToggle = ({ inverted, onInvert }: ThemeToggleProps) => {
  const didMount = useDidMountRef()
  return (
    <Container
      role="switch"
      aria-checked={inverted}
      onClick={onInvert}
      title="Toggle theme"
    >
      <Axis active={inverted} didMount={didMount}>
        <Icon icon={Moon} />
      </Axis>
      <Axis active={!inverted} didMount={didMount}>
        <Icon icon={Sun} />
      </Axis>
      <VisuallyHidden>
        Toggle to {inverted ? "light" : "dark"} colors
      </VisuallyHidden>
    </Container>
  )
}
