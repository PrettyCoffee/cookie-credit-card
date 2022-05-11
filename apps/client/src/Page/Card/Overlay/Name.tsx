import styled, { css } from "styled-components"

const Text = styled.div`
  ${({ theme: { space } }) => css`
    position: absolute;
    bottom: ${space.medium};
    left: 2rem;
    font-size: 0.75rem;
  `}
`

export const Name = () => <Text>Jennys Cookie Credit Card</Text>
