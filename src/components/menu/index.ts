import { Wrapper } from './wrapper'
import { Item } from './item'

export type MenuType = typeof Wrapper & {
  Item: typeof Item
}

export const Menu: MenuType = Object.assign(Wrapper, {
  Item
})