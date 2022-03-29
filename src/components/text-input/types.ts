import { ReactionProps } from 'themeor'
import { WithFormProps } from '../form'

export type TextInputProps = WithFormProps<ReactionProps & {
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
  autoComplete?: string[] | boolean
  options?: any[]
  insertLeft?: any
  insertRight?: any
  children?: any
  hint?: any
  onDisplayValue?: any
  mask?: any
}>