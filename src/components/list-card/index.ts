import {Wrapper} from './wrapper.js'
import {Item} from './item.js'

export type ListCardType = typeof Wrapper & {
  Item?: typeof Item
}

export const ListCard: ListCardType = Wrapper
ListCard.Item = Item