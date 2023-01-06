import { ButtOns, buttonLink } from "~/component"

import type { LinksFunction } from "@remix-run/node"

export const links: LinksFunction = () => [
  ...buttonLink()
]

const TeslaUIPOCV6 = () => {
  return (
    <div>
      <h1>Tesla UI V6 - Proof Of Concept</h1>
      <p>Let's get down to coding!</p>
      <p>This is Alex's project</p>

      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
    </div>
  )
}

export default TeslaUIPOCV6