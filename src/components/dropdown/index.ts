import { Dropdown as Wrapper } from './dropdown'
import { Item } from './item'
export * from './make-dropdown'

export type DropdownType = typeof Wrapper & {
  Item: typeof Item
}

export const Dropdown: DropdownType = Object.assign(Wrapper, {
  Item
})