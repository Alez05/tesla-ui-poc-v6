import { ButtOns, buttonLink, HappyText, textLink, ChevrOn, chevronLink, boxLink, Box} from "~/component"

import type { LinksFunction } from "@remix-run/node"
import { globalLink } from "~/component/global/global"

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...textLink(),
  ...globalLink(),
  ...chevronLink(),
  ...boxLink(),
]

const TeslaUIPOCV6 = () => {
  return (
    <div>
      {/* <HappyText title>Tesla v6</HappyText>
      <HappyText underline>Touchless Delivery</HappyText> */}


      <Box display="flex" gap vertical>
        <Box display="grid">
          <HappyText title>Model X</HappyText>
          <HappyText>Order Online For</HappyText>
          <HappyText underline> Touchless Delivery</HappyText>
        </Box>
        <Box display="grid">
          <HappyText title> Solar Panels</HappyText>
          <HappyText>Lowest Cost Solar Panels in America</HappyText>
        </Box>
      </Box>

      <Box display='flex' gap vertical>
        <ButtOns light >Model S</ButtOns>
        <ButtOns>Model Y</ButtOns>
      </Box>
      <ChevrOn/>

      {/* <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>sfantul babon</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns> */}
    </div>
  )
}

export default TeslaUIPOCV6