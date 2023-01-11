import type { LinksFunction } from '@remix-run/node'
import { Fragment } from 'react'
import chevronStyle from './style/chevron.css'
import type * as T from './chevron.type'

const chevronLink: LinksFunction = () =>[
  {
    rel: 'stylesheet',
    href: chevronStyle
  },
]

const ChevrOn = ({rotate}: T.ChevrOn) => {
  return(
    <div data-chevron data-rotate={rotate}>
      <img alt='Arrow Down' src='/chevron.svg' width={24}/>
    </div>
  )
}

export { chevronLink, ChevrOn }