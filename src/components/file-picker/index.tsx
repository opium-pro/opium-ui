import React from 'react'
import { TextInput, TextInputProps } from '../text-input/index.js'


export const FilePicker = ({ ...props }: TextInputProps) => {
  return (
    <TextInput
      {...props}
    />
  )
}