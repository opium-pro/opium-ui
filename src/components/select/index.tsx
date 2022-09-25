import { Select as Wrapper } from './select.js'
import { Option } from './option.js'

export type SelectType = typeof Wrapper & {
  Option: typeof Option
}

export const Select: SelectType = Object.assign(Wrapper, { Option })