import { ReactionProps, BoxProps } from 'themeor'
import { WithFormProps } from '../form'

export type TextInputTypes = 'text' | 'search' | 'textarea' | 'phone' | 'email' | 'number'

export type TextInputProps = WithFormProps & ReactionProps & BoxProps & {
  type?: TextInputTypes | string
  height?: string
  valueFont?: any
  value?: string
  placeholder?: any
  onChange?: any
  onFocus?: any
  onBlur?: any
  onClick?: any
  id?: string
  error?: string | boolean
  name?: string
  disabled?: boolean
  forwardRef?: any
  initialValue?: string
  autoComplete?: string[] | boolean
  options?: any[]
  insertLeft?: any
  insertRight?: any
  children?: any
  hint?: any
  onDisplayValue?: any
  mask?: any
  tooltip?: any
}