import buttonStyle from './style/button.css'

import { LinksFunction } from "@remix-run/node"

const buttonLink:LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: buttonStyle
  }


const ButtOns = ({ children }) => {
  return(
    <div>
      <button className="button">{children}</button>
    </div>
  )
}

export { ButtOns, buttonLink }