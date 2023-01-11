import type { ReactNode } from "react";

export type Box = {
  children?: ReactNode
  display?: 'flex' | 'grid'
  gap?: boolean
  vertical?: boolean
  fullHeight?: boolean
  align?: 'center' | 'start' | 'end'
  justify?: 'center' | 'start' | 'end'
}