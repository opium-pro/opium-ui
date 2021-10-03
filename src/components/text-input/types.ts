import { BoxProps } from 'themeor'
import { WithFormProps } from '../form'

export type TextInputProps = WithFormProps & {
  type?: string
  height?: string
  valueFont?: any
  label?: string
  value?: string
  placeholder?: string
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
  autocomplete?: string[] | boolean
  options?: any[]
  insertLeft?: any
  insertRight?: any
  children?: any
  hint?: any
  onDisplayValue?: any
}