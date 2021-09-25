import { Wrapper } from './wrapper'
import { Item } from './item'

export type DropdownType = typeof Wrapper & {
  Item: typeof Item
}

export const Dropdown: DropdownType = Object.assign(Wrapper, {
  Item
})