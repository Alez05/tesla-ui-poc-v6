import type { LinksFunction } from "@remix-run/node";
import globalStyle from './global.css'

export const globalLink: LinksFunction = () => [
  {
    rel: 'StyleSheet',
    href: globalStyle
  }
]

