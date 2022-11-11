import { useMemo, useState } from "preact/hooks"
import styled from "styled-components"

import { Button, TextInput, Text } from "../../../components"
import { useCookies } from "../../../providers"

const Content = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`

export const Underlay = () => {
  const [cookies, setCookies] = useCookies()
  const [amount, setAmount] = useState("")

  const amountAlert = useMemo(() => {
    if (amount === "") return undefined

    const number = Number(amount)
    if (Number.isNaN(number)) return "You ain't fooling me, thats no number."
    else if (amount.split(/[.,]/)[1]?.length > 2)
      return "We ain't taking half cookies here, only whole ones."
    else if (number > 24)
      return "Don't try this trickery on me, you can't just demand THAT many!"
    else if (cookies + number < 0)
      return "How the fuck are you supposed to have a negative amount of cookies???"
    return undefined
  }, [amount, cookies])

  const invalid = !!amountAlert || !amount || amount === "0"

  const handleSubmit = () => {
    if (invalid) return
    setCookies(Number(amount))
    setAmount("")
  }

  return (
    <>
      <Content>
        <TextInput
          label="Amount"
          value={amount}
          onChange={setAmount}
          alert={amountAlert ? "error" : undefined}
          onKeyDown={({ key }) => key === "Enter" && handleSubmit()}
          inverted
        />
        <Button
          label="Set cookies"
          inverted
          disabled={invalid}
          onClick={handleSubmit}
        />
      </Content>
      <Text size="small" inverted>
        {amountAlert}
      </Text>
    </>
  )
}
