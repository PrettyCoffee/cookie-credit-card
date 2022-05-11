import styled, { css } from "styled-components"

const Input = styled.input`
  ${({ theme: { color, space } }) => css`
    height: 2rem;
    width: 12rem;
    background-color: transparent;
    border: none;
    color: ${color.bg.base};
    border-bottom: ${space.smallest} solid ${color.bg.base};
    outline: none;

    :focus-visible {
      border-color: ${color.bg.alt};
    }
  `}
`

type TextInputProps = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
}

export const TextInput = ({ onChange, ...delegated }: TextInputProps) => (
  <Input
    type="password"
    onChange={event => onChange?.(event.currentTarget.value)}
    {...delegated}
  />
)
