import { Wrapper } from './wrapper.js'
import { Row } from './row.js'
import { Cell } from './cell.js'
import { HeadCell } from './head-cell.js'

export type Table = typeof Wrapper & {
  Cell: typeof Cell
  Row: typeof Row
  HeadCell: typeof HeadCell
}

export const Table: Table = Object.assign(Wrapper, { Cell, Row, HeadCell })