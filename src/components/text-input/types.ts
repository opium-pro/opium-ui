import { ReactNode } from 'react'

export interface TextInputProps {
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
  pasteBefore?: ReactNode
  pasteAfter?: ReactNode
  children?: ReactNode
}