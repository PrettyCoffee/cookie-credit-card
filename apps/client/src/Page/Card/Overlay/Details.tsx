import { Text } from "@ccc/components"
import styled from "styled-components"

import { Checklist } from "../../../components"

const Items = styled.div`
  flex: 1;
`

const ChecklistLayout = styled.div`
  margin-top: 1rem;
  width: fit-content;
  max-width: calc(44px * 4);
`

type DetailsProps = {
  cookies: number
}

export const Details = ({ cookies }: DetailsProps) => (
  <Items>
    <Text.Large as="h1" bold>
      Your Cookies:
    </Text.Large>
    <ChecklistLayout>
      <Checklist count={cookies} />
    </ChecklistLayout>
  </Items>
)
