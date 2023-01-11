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

const missingDataMap = {
  'model-3': {
    title: 'Model 3',
    text: 'Order Online For',
    link: 'Touchless Inventory',
    buttonList: [
      'CUSTOM ORDER',
      'EXISTING INVENTORY'
    ]
  },
  'model-y': {
    title: 'Model Y',
    text: 'Order Online For',
    link: 'Touchless Inventory',
    buttonList: [
      'CUSTOM ORDER',
      'EXISTING INVENTORY'
    ]
  },
  'model-s': {
    title: 'Model S',
    text: 'Order Online For',
    link: 'Touchless Inventory',
    buttonList: [
      'CUSTOM ORDER',
      'EXISTING INVENTORY'
    ]
  },
  'model-x': {
    title: 'Model x',
    text: 'Order Online For',
    link: 'Touchless Inventory',
    buttonList: [
      'CUSTOM ORDER',
      'EXISTING INVENTORY'
    ]
  },
  'solar-roof': {
    title: 'Solar Roof',
    text: 'Produce Clean Energy From Your Roof',
    buttonList: [
      'ORDER NOW',
      'LEARN MORE'
    ]
  },
  'solar-panel': {
    title: 'Solar Panel',
    text: 'Lowest Cost Solar Panels in America',
    buttonList: [
      'ORDER NOW',
      'LEARN MORE'
    ]
  },
  'accessories': {
    title: 'Accessories',
    buttonList: [
      'SHOP NOW',
    ]
  },
}


const TeslaUIPOCV6 = () => {

  console.log(sectionList);

  return (
    <>
    {sectionList.map( (section, k) => {
      return(
      <Box key={section} section={section} fullHeight display="flex" gap vertical>
        <Box display="grid">
          <HappyText title>{missingDataMap[section].title}</HappyText>
          <HappyText>{missingDataMap[section]?.text}</HappyText>
          { missingDataMap[section]?.link && (<HappyText underline> {missingDataMap[section]?.link}</HappyText>)}
        </Box>
        <Box display="flex" vertical align="center" justify="center" gap>
          <Box display="flex" gap vertical>
            {missingDataMap[section].buttonList.map( (buttonText, key) => {
              return(
                <ButtOns light={!!key} key={buttonText}>
                  {buttonText}
                </ButtOns>
              )
            })}
          </Box>
          <a href={`#${sectionList[k + 1 === sectionList.length ? 0 : k + 1]}`}>
            <ChevrOn rotate={k + 1 === sectionList.length ? '180' : '' }/>
          </a>

        </Box>
      </Box>
      )
    })}
    </>
  )
}

export default TeslaUIPOCV6