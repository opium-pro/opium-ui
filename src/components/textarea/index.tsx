import React from 'react'
import { forwardRef } from 'react'
import {TextInput, ITextInputProps} from '../text-input'


export const TextArea = forwardRef(({ ...props }: ITextInputProps, ref) => {
  return (
    <TextInput
      {...props}
      type="textarea"
      height="114px"
      forwardRef={ref}
    />
  )
})