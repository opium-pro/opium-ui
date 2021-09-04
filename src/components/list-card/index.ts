import {Wrapper} from './wrapper'
import {Item} from './item'

export type ListCardType = typeof Wrapper & {
  Item?: typeof Item
}

export const ListCard: ListCardType = Wrapper
ListCard.Item = Item