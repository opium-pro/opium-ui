import { Wrapper, Props as StatsProps } from './wrapper.js'
import { Item, Props as StatsItemProps } from './item.js'

export type StatsItem = typeof Item

export type Stats = typeof Wrapper & {
  Item: StatsItem
}

export const Stats: Stats = Object.assign(Wrapper, {
  Item
})

export type { StatsProps, StatsItemProps }