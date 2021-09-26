import React from 'react'
import { TextInput } from "../text-input"
import { Dropdown } from '../dropdown'
import { Font } from 'themeor'


export function Select({ ...rest }) {
  return (
    <TextInput
      {...rest}
      options={[
        <Option value="123123" label="sadasdasd" hint="asdasds" />,
        <Option value="222" label="adasdsad" hint="hint" />,
        <Option value="3333" label="iioois" />,
      ]}
      type="select"
    />
  )
}

function Option({value, onClick = undefined, label = undefined, hint = undefined, children = undefined}) {
  return (
    <Dropdown.Item onClick={onClick}>
      {label}
      {!!hint && (<Font size="sm" fill="faint-down">{hint}</Font>)}
      {children}
    </Dropdown.Item>
  )
}