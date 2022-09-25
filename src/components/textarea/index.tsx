import React from 'react'
import { TextInput, TextInputProps } from '../text-input/index.js'


export const TextArea = ({ type, ...props }: TextInputProps) => {
  return (
    <TextInput
      height="114px"
      valueFont={{
        prewrap: true,
      }}
      {...props}
      type={type || "textarea"}
    />
  )
}