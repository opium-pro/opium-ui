import React from 'react'
import { useTextInput } from "../text-input"
import { Dropdown, useDropdown } from '../dropdown'
import { Font } from 'themeor'
import { useSelect } from './context'


export function Option({
  value,
  onClick = undefined,
  label = undefined,
  hint = undefined,
  children = undefined
}) {
  const { value: currentValue, onChange } = useTextInput()
  const { multi } = useSelect()
  const { setOpened } = useDropdown()

  function handleClick() {
    if (multi) {
      const newValue = new Set(currentValue)
      if (newValue.has(value)) {
        newValue.delete(value)
      } else {
        newValue.add(value)
      }
      onChange?.(Array.from(newValue))
    } else {
      setOpened(false)
      value === currentValue ? onChange?.() : onChange?.(value)
    }
  }

  return (
    <Dropdown.Item onClick={handleClick}>
      {label}
      {!!hint && (<Font size="sm" fill="faint-down">{hint}</Font>)}
      {children}
    </Dropdown.Item>
  )
}
