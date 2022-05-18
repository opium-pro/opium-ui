import React from 'react'
import { TextInput, TextInputProps } from '../text-input'
import dayjs from 'dayjs'


export const DatePicker = (props: TextInputProps) => {
  return (
    <TextInput
      onRender={(value) => dayjs(value).format('YYYY-MM-DD')}
      onDisplayValue={(value) => {
        let date = dayjs(value)
        if (!date.isValid()) {
          return value
        }
        return date.format('DD MMM YYYY')
      }}
      onChange={((value) => dayjs(value).toISOString())}
      {...props}
      type="date"
    />
  )
}