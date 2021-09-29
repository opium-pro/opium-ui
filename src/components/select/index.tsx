import { Select as Wrapper } from './select'
import { Option } from './option'

export type SelectType = typeof Wrapper & {
  Option: typeof Option
}

export const Select: SelectType = Object.assign(Wrapper, { Option })