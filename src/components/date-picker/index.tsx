import React from 'react'
import { TextInput, TextInputProps } from '../text-input'
import dayjs from 'dayjs'


export type DatePickerProps = TextInputProps & {
  time?: boolean
  format?: string
}


export const DatePicker = ({ time, format, ...props }: DatePickerProps) => {
  const formatString = format || (time ? 'YYYY-MM-DD, HH:mm:ss' : 'YYYY-MM-DD')

  return (
    <TextInput
      onRender={(value) => dayjs(value).format(formatString)}
      onDisplayValue={(value) => {
        let date = dayjs(value)
        if (!date.isValid()) {
          return value
        }
        return date.format(formatString)
      }}
      onChange={((value) => dayjs(value).toISOString())}
      {...props}
      type="date"
    />
  )
}