import buttonStyle from './style/button.css'

import type { LinksFunction } from "@remix-run/node"
import type { ButtOnsType } from './button.type'

const buttonLink:LinksFunction = () => [
  // mobile
  {
    rel: 'stylesheet',
    href: buttonStyle
  },
  // tablet
  {
    rel: 'stylesheet',
    href: buttonStyle,
    media: '768px'
  },
  // desktop
  {
    rel: 'stylesheet',
    href: buttonStyle,
    media: '1280px'
  },
  // dark mode
  {
    rel: 'stylesheet',
    href: buttonStyle,
    media: 'dark mode'
  },
]

const ButtOns = ({ children, light }: ButtOnsType ) => {
  return(
    <div>
      <button data-button>{children}</button>
      <button data-button data-light={light}>{children}</button>
    </div>
  )
}

export { ButtOns, buttonLink }