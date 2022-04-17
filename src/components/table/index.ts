import { Wrapper } from './wrapper'
import { Row } from './row'
import { Cell } from './cell'

export type Table = typeof Wrapper & {
  Cell: typeof Cell
  Row: typeof Row
}

export const Table: Table = Object.assign(Wrapper, { Cell, Row })