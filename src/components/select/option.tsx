import React from 'react'
import { useTextInput } from "../text-input"
import { Dropdown } from '../dropdown'
import { Font } from 'themeor'


export function Option({
  value,
  onClick = undefined,
  label = undefined,
  hint = undefined,
  children = undefined
}) {
  // const { value: currentValue } = useTextInput()

  return (
    <Dropdown.Item onClick={onClick}>
      {label}
      {!!hint && (<Font size="sm" fill="faint-down">{hint}</Font>)}
      {children}
    </Dropdown.Item>
  )
}
