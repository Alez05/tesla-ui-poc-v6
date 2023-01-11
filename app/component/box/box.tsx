import type { LinksFunction } from "@remix-run/node";
import boxStyle from './style/box.css'
import type * as T from './box.type'

const boxLink: LinksFunction = () => [
  {
    rel:'stylesheet',
    href: boxStyle
  },
]

const Box = ({
  children,
  display,
  gap,
  vertical,
  fullHeight,
  align,
  justify,
  section}: T.Box) => {
  return(
    <div
      data-full-height={fullHeight}
      data-vertical={vertical}
      data-gap={gap}
      data-align={align}
      data-box={display}
      data-justify={justify}
      data-section={section}
    >
      {children}
    </div>
  )
}




export { boxLink, Box }