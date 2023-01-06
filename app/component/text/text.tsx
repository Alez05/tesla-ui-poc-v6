import textStyle from './style/text.css'


import type { LinksFunction } from '@remix-run/node'
import type { HappyTextType } from './text.type'

const textLink: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: textStyle
  },
]



const HappyText = ({ children, title, underline }: HappyTextType ) => {
  return <div data-text data-title={title} data-underline={underline}>{children}</div>
}


export {HappyText, textLink}