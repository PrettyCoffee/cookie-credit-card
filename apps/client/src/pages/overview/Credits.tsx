import { Table, Text, Column, Spacing } from "@ccc/components"
import styled from "styled-components"

import { useCookies } from "../../providers/cookies"

type CreditData = {
  debtor: string
  amount: number
}

const CreditColumns: Column<CreditData>[] = [
  { key: "debtor", header: "Debtor", width: "10rem" },
  { key: "amount", header: "Amount", alignment: "right" },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Credits = () => {
  const { credits } = useCookies()
  return (
    <Container>
      <Text.Large bold as="h2">
        Your credits
      </Text.Large>
      <Spacing bottom="medium" />
      {credits.length ? (
        <Table data={credits} columns={CreditColumns} />
      ) : (
        <Text.Medium>
          Unfortunatly you don't have
          <br />
          any cookies :(
        </Text.Medium>
      )}
    </Container>
  )
}
