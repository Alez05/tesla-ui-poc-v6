import type { LinksFunction } from "@remix-run/node";
import boxStyle from './style/box.css'
import type * as T from './box.type'

const boxLink: LinksFunction = () => [
  {
    rel:'stylesheet',
    href: boxStyle
  },
]

const Box = ({ children, display, gap, vertical }: T.Box) => {
  return(
    <div data-vertical={vertical} data-gap={gap} data-display={display}>
      {children}
    </div>
  )
}




export { boxLink, Box }