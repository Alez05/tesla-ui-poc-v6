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
      <Box  fullHeight display="flex" gap vertical>
        <Box display="grid">
          <HappyText title>Model S</HappyText>
          <HappyText>Order Online For</HappyText>
          <HappyText underline> Touchless Delivery</HappyText>
        </Box>
        <Box display="flex" vertical align="center" justify="center" gap>
          <Box display="flex" gap vertical>
            <ButtOns light>Costum Order</ButtOns>
            <ButtOns>Existing Inventory</ButtOns>
          </Box>
        </Box>
      </Box>
      <ChevrOn/>
{/*
      <Box display='flex' gap vertical>
        <ButtOns light >Model S</ButtOns>
        <ButtOns>Model Y</ButtOns>
      </Box> */}

      {/* <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>sfantul babon</ButtOns>
      <ButtOns>Pekemons</ButtOns>
      <ButtOns>Pekemons</ButtOns> */}
    </div>
  )
}

export default TeslaUIPOCV6