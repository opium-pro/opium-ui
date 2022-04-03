import { Wrapper, Props as StatsProps } from './wrapper'
import { Item, Props as StatsItemProps } from './item'

export type StatsItem = typeof Item

export type Stats = typeof Wrapper & {
  Item: StatsItem
}

export const Stats: Stats = Object.assign(Wrapper, {
  Item
})

export type { StatsProps, StatsItemProps }