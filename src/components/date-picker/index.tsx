import React from 'react'
import {TextInput, TextInputProps} from '../text-input'
import dayjs from 'dayjs'


export const DatePicker = ({ ...props }: TextInputProps) => {
  return (
    <TextInput
      onDisplayValue={(value) => {
        let date = dayjs(value)
        if (!date.isValid()) {
          return value
        }
        return date.format('DD MMM YYYY')
      }}
      type="date"
      {...props}
    />
  )
}