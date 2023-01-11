import { ButtOns, buttonLink, HappyText, textLink, ChevrOn, chevronLink, boxLink, Box, sectionList} from "~/component"

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

  console.log(sectionList);

  return (
    <>
    {sectionList.map( (section) => {
      return(
      <Box key={section} section={section} fullHeight display="flex" gap vertical>
        <Box display="grid">
          <HappyText title>{section}</HappyText>
          <HappyText>Order Online For</HappyText>
          <HappyText underline> Touchless Delivery</HappyText>
        </Box>
        <Box display="flex" vertical align="center" justify="center" gap>
          <Box display="flex" gap vertical>
            <ButtOns light>Costum Order</ButtOns>
            <ButtOns>Existing Inventory</ButtOns>
          </Box>
          <ChevrOn/>
        </Box>
      </Box>
      )
    })}
    </>
  )
}

export default TeslaUIPOCV6