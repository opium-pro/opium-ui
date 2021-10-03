import { Wrapper } from './wrapper'
import { Item } from './item'

export type ListRowType = typeof Wrapper & {
  Item: typeof Item
}

export const ListRow: ListRowType = Object.assign(Wrapper, { Item })