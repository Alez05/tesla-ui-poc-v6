import textStyle from './style/text.css'


import type { LinksFunction } from '@remix-run/node'
import type { HappyTextType } from './text.type'

const textLink: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: textStyle
  },
]



const HappyText = ({ children }: HappyTextType ) => {
  return <div data-text >{children}</div>
}


export {HappyText, textLink}