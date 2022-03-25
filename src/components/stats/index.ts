import { Wrapper } from './wrapper'
import { Item } from './item'

export type StatsType = typeof Wrapper & {
  Item: typeof Item
}

export const Stats: StatsType = Object.assign(Wrapper, {
  Item
})