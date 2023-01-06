import { ButtOns, buttonLink, HappyText, textLink } from "~/component"

import type { LinksFunction } from "@remix-run/node"
import { globalLink } from "~/component/global/global"

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...textLink(),
  ...globalLink(),
]

const TeslaUIPOCV6 = () => {
  return (
    <div>
      <HappyText title underline>Tesla UI V6 - Proof Of Concept</HappyText>
      <HappyText title>Tesla UI V6 - Proof Of Concept</HappyText>
      <HappyText underline>Tesla UI V6 - Proof Of Concept</HappyText>
      <p>This is Alex's project</p>

      <ButtOns light>Model S light here</ButtOns>
      <ButtOns light>Model S</ButtOns>

      {/* <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>sfantul babon</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns> */}
    </div>
  )
}

export default TeslaUIPOCV6