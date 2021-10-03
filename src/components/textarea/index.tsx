import React from 'react'
import {TextInput, TextInputProps} from '../text-input'


export const TextArea = ({ ...props }: TextInputProps) => {
  return (
    <TextInput
      {...props}
      type="textarea"
      height="114px"
    />
  )
}