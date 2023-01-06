import { ButtOns, buttonLink, HappyText, textLink } from "~/component"

import type { LinksFunction } from "@remix-run/node"

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...textLink(),
]

const TeslaUIPOCV6 = () => {
  return (
    <div>
      <HappyText>Tesla UI V6 - Proof Of Concept</HappyText>
      <p>Let's get down to coding!</p>
      <p>This is Alex's project</p>

      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>sfantul babon</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
    </div>
  )
}

export default TeslaUIPOCV6