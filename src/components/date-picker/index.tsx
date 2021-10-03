import React from 'react'
import {TextInput, TextInputProps} from '../text-input'


export const DatePicker = ({ ...props }: TextInputProps) => {
  return (
    <TextInput
      // placeholder="dd.mm.yy"
      onDisplayValue={(value) => value.split('-').reverse().join('.')}
      {...props}
      type="date"
    />
  )
}