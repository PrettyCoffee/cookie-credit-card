import { Credit } from "@ccc/api-definition"
import { Table, Text, Column, Spacing } from "@ccc/components"
import styled from "styled-components"

import { useCookies } from "../../providers/cookies"

const CreditColumns: Column<Credit>[] = [
  { key: "debtor", header: "Debtor", width: "10rem" },
  { key: "amount", header: "Amount", alignment: "right" },
  { key: "lastUpdated", header: "Last updated", alignment: "center" },
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
