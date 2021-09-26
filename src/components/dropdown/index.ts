import { Dropdown as Wrapper } from './dropdown'
import { Item } from './item'

export type DropdownType = typeof Wrapper & {
  Item: typeof Item
}

export const Dropdown: DropdownType = Object.assign(Wrapper, {
  Item
})

export * from './make-dropdown'
export * from './context'