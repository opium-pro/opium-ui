import React from 'react'
import { TextInput } from "../text-input"
import { Dropdown } from '../dropdown'


export function Select({ ...rest }) {
  return (
    <TextInput
      {...rest}
      options={(<>
        <Option value="123123">11111</Option>
        <Option value="222">2222</Option>
        <Option value="3333">3333</Option>
      </>)}
      type="select"
    />
  )
}

export function Option({value, children}) {
  return (
    <Dropdown.Item>{children}</Dropdown.Item>
  )
}