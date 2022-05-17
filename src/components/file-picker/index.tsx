import React from 'react'
import { TextInput, TextInputProps } from '../text-input'


export const FilePicker = ({ ...props }: TextInputProps) => {
  return (
    <TextInput
      {...props}
    />
  )
}