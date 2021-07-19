import {Wrapper} from './wrapper'
import {Item} from './item'

export type TopMenuType = typeof Wrapper & {
  Item?: typeof Item
}

const TopMenu: TopMenuType = Wrapper
TopMenu.Item = Item

export {TopMenu}