import { TextInput, Text } from "@ccc/components"
import { useState } from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${space.medium};
  `}
`

export const SignUp = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Wrapper>
      <Text.Medium inverted>Create an account</Text.Medium>
      <TextInput label="Name" inverted value={name} onChange={setName} />
      <TextInput
        label="Password"
        inverted
        value={password}
        onChange={setPassword}
      />
    </Wrapper>
  )
}
