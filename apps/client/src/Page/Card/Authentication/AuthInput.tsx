import styled from "styled-components"

import { TextInput } from "../../../components/TextInput"
import { useAuth } from "../../../Providers/Auth"

const InputLayout = styled.div`
  position: absolute;
  bottom: 2.5rem;
  gap: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AuthInput = () => {
  const { auth, setAuth } = useAuth()

  return (
    <InputLayout>
      <TextInput placeholder="Authenticate!" value={auth} onChange={setAuth} />
    </InputLayout>
  )
}
