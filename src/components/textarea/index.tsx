import React from 'react'
import {TextInput, TextInputProps} from '../text-input'


export const TextArea = ({ ...props }: TextInputProps) => {
  return (
    <TextInput
      height="114px"
      type="textarea"
      {...props}
    />
  )
}