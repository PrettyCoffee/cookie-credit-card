import { useState } from "preact/hooks"
import { User as UserIcon, Key } from "react-feather"
import styled from "styled-components"

import { TextInput, Spacing, Button, IconDefinition } from "../components"
import { User, useUser } from "../providers"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

interface AuthFormProps {
  submitCaption: string
  submitIcon: IconDefinition
  onSubmit: (user: User) => void
}

export const AuthForm = ({
  submitCaption,
  submitIcon,
  onSubmit,
}: AuthFormProps) => {
  const { name: existingName } = useUser()
  const [name, setName] = useState(existingName || "")
  const [password, setPassword] = useState("")

  return (
    <Wrapper>
      <TextInput
        label="Name"
        value={existingName || name}
        onChange={setName}
        icon={UserIcon}
        fixedWidth
        disabled={!!existingName}
      />
      <TextInput
        type="password"
        label="Password"
        value={password}
        onChange={setPassword}
        icon={Key}
        fixedWidth
      />
      <Spacing marginLeftAuto>
        <Button
          label={submitCaption}
          icon={submitIcon}
          onClick={() => onSubmit({ name, password })}
          disabled={!name || !password}
        />
      </Spacing>
    </Wrapper>
  )
}
