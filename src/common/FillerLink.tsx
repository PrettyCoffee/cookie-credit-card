import { useState } from "preact/hooks"

import { Link } from "../components"

interface Link {
  href?: string
  label: string
}
const linkByClicks: Link[] = [
  { label: "Nothing to see here." },
  { label: "Stop it." },
  { label: "Really nothing!" },
  { label: "Stop it. >:(" },
  { label: "Stop iiiiit. >:(" },
  { label: "Duuuude >:(" },
  {
    label: ">:(",
    href: "https://www.youtube.com/watch?v=VLhJOd_TFiI?autoplay=1&mute=1",
  },
]

export const FillerLink = () => {
  const [clicks, setClicks] = useState(0)

  const link = linkByClicks[clicks] || linkByClicks[linkByClicks.length - 1]
  const increaseClicks = () => setClicks(v => v + 1)

  return <Link {...link} inverted onClick={increaseClicks} />
}
