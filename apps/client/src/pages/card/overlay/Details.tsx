import { Text } from "@ccc/components"
import styled from "styled-components"

import { useCookies } from "../../../providers/cookies"

const Items = styled.div`
  flex: 1;
`

const Row = styled.span`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
  height: 1.5rem;
  &:last-of-type::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 1px;
    width: 1.5rem;
    background-color: black;
    opacity: 0.3;
  }
`

const CreditSummary = () => {
  const { totalCredits, totalDebts } = useCookies()

  return (
    <>
      <br />
      <Row>
        <span>Credits</span>
        <span>{totalCredits}</span>
      </Row>
      <Row>
        <span>Debts</span>
        <span>{totalDebts}</span>
      </Row>
      <Row>
        <span>Total</span>
        <span>{totalCredits - totalDebts}</span>
      </Row>
    </>
  )
}

export const Details = () => {
  return (
    <Items>
      <Text.Large as="h1" bold>
        Your Cookies:
      </Text.Large>
      <CreditSummary />
    </Items>
  )
}
