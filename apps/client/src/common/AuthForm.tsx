import { TextInput, Spacing, Button, IconDefinition } from "@ccc/components"
import { useState } from "react"
import { User, Key } from "react-feather"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

interface AuthFormProps {
  submitCaption: string
  submitIcon: IconDefinition
  onSubmit: (name: string, password: string) => void
}

export const AuthForm = ({
  submitCaption,
  submitIcon,
  onSubmit,
}: AuthFormProps) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Wrapper>
      <TextInput
        label="Name"
        autoComplete="username"
        value={name}
        onChange={setName}
        icon={User}
        fixedWidth
      />
      <TextInput
        type="password"
        label="Password"
        autoComplete="current-password"
        value={password}
        onChange={setPassword}
        icon={Key}
        fixedWidth
      />
      <Spacing marginLeftAuto>
        <Button
          label={submitCaption}
          icon={submitIcon}
          onClick={() => onSubmit(name, password)}
          disabled={!name || !password}
        />
      </Spacing>
    </Wrapper>
  )
}
