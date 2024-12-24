import type { NephosIcon } from './build/my-icons.model'
export type NephosIconNameSubset<T extends readonly NephosIcon[]> =
  T[number]['name']
export * from './build/my-icons.model'
export * from './build/nephos-figma.icon'
export * from './build/nephos-github.icon'
export * from './build/nephos-linkedin.icon'

