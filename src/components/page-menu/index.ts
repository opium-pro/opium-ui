import Wrapper from './wrapper'
import {Item} from './item'

type PageMenuType = typeof Wrapper & {
  Item?: typeof Item
}

export const PageMenu:PageMenuType = Wrapper
PageMenu.Item = Item