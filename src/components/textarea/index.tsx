import React from 'react'
import { forwardRef } from 'react'
import {TextInput, TextInputProps} from '../text-input'


export const TextArea = forwardRef(({ ...props }: TextInputProps, ref) => {
  return (
    <TextInput
      {...props}
      type="textarea"
      height="114px"
      forwardRef={ref}
    />
  )
})