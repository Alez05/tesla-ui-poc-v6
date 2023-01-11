import type { ReactNode } from "react";

export const sectionList = [
  'model-3',
  'model-y',
  'model-s',
  'model-x',
  'solar-panel',
  'solar-roof',
  'accessories',
] as const
type sectionType = typeof sectionList[number]

export type Box = {
  children?: ReactNode
  display?: 'flex' | 'grid'
  gap?: boolean
  vertical?: boolean
  fullHeight?: boolean
  align?: 'center' | 'start' | 'end'
  justify?: 'center' | 'start' | 'end'
  section?: sectionType
}