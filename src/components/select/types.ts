import { Context, FC } from 'react'
import { TextInputProps } from "../text-input"

export type SelectProps = TextInputProps & {
  multi?: boolean
  onDisplayValue?: any
}

export type SelectType = FC<SelectProps>

// export type SelectOptionProps = {
//   value?: any
//   label?: string
//   hint?: string
//   children?: any
//   displayValue?: any
//   onClick?: any
//   active?: boolean
// }

// export type SelectOptionType = FC<SelectOptionProps>

export type SelectContextType = Context<SelectProps & {
  setDisplayValues?: any
  displayValues?: any
}>