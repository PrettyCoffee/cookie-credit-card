import styled from "styled-components"

import { Text } from "../../../components"
import { useCookies } from "../../../providers"
import { Checklist } from "./checklist"

const Items = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 3rem;
`

export const Details = () => {
  const [cookies] = useCookies()
  return (
    <Items>
      <Text.Large as="h1" bold>
        Your Cookies:
      </Text.Large>
      <div>
        <Checklist count={cookies} />
      </div>
    </Items>
  )
}
