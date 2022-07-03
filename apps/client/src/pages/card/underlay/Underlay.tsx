import { Button, TextInput, Text } from "@ccc/components"
import { useMemo, useState } from "preact/hooks"
import styled from "styled-components"

import { useAuth } from "../../../providers/auth"
import { useCookies } from "../../../providers/cookies"

const Content = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`

const initialData = { user: "", amount: "0" }

export const Underlay = () => {
  const { transfer } = useCookies()
  const { user } = useAuth()
  const [data, setData] = useState(initialData)

  const amountAlert = useMemo(() => {
    const number = Number(data.amount)
    if (Number.isNaN(number)) return "You ain't fooling me, thats no number."
    else if (data.amount.split(".")[1]?.length > 2)
      return "We ain't taking half cookies here, only whole ones."
    else if (number < 0)
      return "Don't try this trickery on me, you can't just demand cookies without consent!"
    return null
  }, [data.amount])

  const userAlert = useMemo(() => {
    if (user?.name === data.user)
      return "Bro, why would you send yourself cookies?"
    return null
  }, [data.user])

  const alert = amountAlert || userAlert

  const setUser = (value: string) => setData({ ...data, user: value })
  const setAmount = (amount: string) => setData({ ...data, amount })

  const buttonDisabled =
    !!alert || !data.user || !data.amount || data.amount === "0"

  const handleSubmit = () => {
    transfer(data.user, Number(data.amount))
    setData(initialData)
  }

  return (
    <>
      <Content>
        <TextInput
          label="User name"
          value={data.user}
          onChange={setUser}
          alert={userAlert ? "error" : undefined}
          inverted
        />
        <TextInput
          label="Amount"
          value={data.amount}
          onChange={setAmount}
          alert={amountAlert ? "error" : undefined}
          inverted
        />
        <Button
          label="Send"
          inverted
          disabled={buttonDisabled}
          onClick={handleSubmit}
        />
      </Content>
      <Text size="small" inverted>
        {alert}
      </Text>
    </>
  )
}
