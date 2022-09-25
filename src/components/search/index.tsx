import React from 'react'
import { Gap, Box, Align, Icon } from 'themeor'
import { TextInput, TextInputProps } from '../text-input/index.js'


export const Search = ({ label, ...props }: TextInputProps) => {
  return (
    <TextInput
      type="search"
      placeholder={label}
      radius="max"
      insertLeft={(
        <Align row vert="center">
          <Gap left="md">
            <Icon fill="faintDown" name="search" />
          </Gap>
        </Align>
      )}
      {...props}
    />
  )
}