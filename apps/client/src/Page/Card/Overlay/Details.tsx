import styled from "styled-components"

import Checklist from "../../../components/checklist"

const Items = styled.div`
  flex: 1;
`

const Headline = styled.span`
  font-weight: 700;
  font-size: 2rem;
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
    <Headline>Your Cookies:</Headline>
    <ChecklistLayout>
      <Checklist count={cookies} />
    </ChecklistLayout>
  </Items>
)
