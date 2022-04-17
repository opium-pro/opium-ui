import { Wrapper } from './wrapper'
import { Row } from './row'
import { Cell } from './cell'
import { HeadCell } from './head-cell'

export type Table = typeof Wrapper & {
  Cell: typeof Cell
  Row: typeof Row
  HeadCell: typeof HeadCell
}

export const Table: Table = Object.assign(Wrapper, { Cell, Row, HeadCell })