import { Text } from "@ccc/components"
import styled, { css } from "styled-components"

const Headline = styled(Text.Large)`
  ${({ theme: { shadow, color } }) => css`
    position: absolute;

    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    text-shadow: ${shadow.medium(color.bg.base, { usage: "text-shadow" })};
  `}
`

interface CardHeadlineProps {
  caption: string
  title?: string
}

export const CardHeadline = ({ caption, title }: CardHeadlineProps) => (
  <div style={{ position: "relative" }}>
    <Headline title={title} bold>
      {caption}
    </Headline>
  </div>
)
