import {Wrapper} from './wrapper'
import {Item} from './item'

export type SideMenuType = typeof Wrapper & {
  Item?: typeof Item
}

export const SideMenu: SideMenuType = Wrapper
SideMenu.Item = Item