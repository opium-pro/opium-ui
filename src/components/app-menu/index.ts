import { Wrapper } from './wrapper'
import { Item } from './item'

export type AppMenuType = typeof Wrapper & {
  Item: typeof Item
}

export const AppMenu: AppMenuType = Object.assign(Wrapper, {
  Item
})