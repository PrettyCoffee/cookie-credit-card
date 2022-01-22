import styled, { css } from "styled-components"

// @ts-ignore
import cookie from "../../../assets/cookie.png"

const Wrapper = styled.div`
  ${({ theme: { color } }) => css`
    border-radius: 8px;

    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${color.stroke};
  `}
`

const Image = styled.img`
  height: 100px;
`

export const Cookie = () => (
  <Wrapper>
    <Image src={cookie} alt="cookie" />
  </Wrapper>
)
