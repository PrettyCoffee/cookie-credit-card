import styled from "styled-components"

// @ts-ignore
import cookie from "../../../assets/cookie.webp"

const Wrapper = styled.div`
  border-radius: 8px;

  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 100px;
`

export const Cookie = () => (
  <Wrapper>
    <Image src={cookie} alt="cookie" />
  </Wrapper>
)
