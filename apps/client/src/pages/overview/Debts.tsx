import { Debt } from "@ccc/api-definition"
import { Table, Text, Column, Spacing } from "@ccc/components"
import styled from "styled-components"

import { useCookies } from "../../providers/cookies"

const DebtColumns: Column<Debt>[] = [
  { key: "creditor", header: "Creditor", width: "10rem" },
  { key: "amount", header: "Amount", alignment: "right" },
  { key: "lastUpdated", header: "Last updated", alignment: "center" },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Debts = () => {
  const { debts } = useCookies()
  return (
    <Container>
      <Text.Large bold as="h2">
        Your debts
      </Text.Large>
      <Spacing bottom="medium" />
      {debts.length ? (
        <Table data={debts} columns={DebtColumns} />
      ) : (
        <Text.Medium>
          Congratulations, you don't
          <br /> have any debts :)
        </Text.Medium>
      )}
    </Container>
  )
}
