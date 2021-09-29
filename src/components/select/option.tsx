import React from 'react'
import { useTextInput } from "../text-input"
import { Dropdown, useDropdown } from '../dropdown'
import { Font } from 'themeor'
import { useSelect } from './context'


export function Option({
  value: oneValue,
  onClick = undefined,
  label = undefined,
  hint = undefined,
  children = undefined,
  displayValue: initialDisplayValue = undefined,
}) {
  const { value, onChange, displayValue } = useTextInput()
  const { multi } = useSelect()
  const { setOpened } = useDropdown()

  function handleClick(event) {
    if (multi) {
      let newValue: any = new Set(Array.isArray(value) ? value : [value])
      const newDisplayValue = new Set(Array.isArray(displayValue) ? displayValue : [displayValue])
      if (newValue.has(oneValue)) {
        newValue.delete(oneValue)
        newDisplayValue.delete(initialDisplayValue || oneValue)
      } else {
        newValue.add(oneValue)
        newDisplayValue.add(initialDisplayValue || oneValue)
      }
      newValue = Array.from(newValue)
      onChange?.(newValue, Array.from(newDisplayValue) || newValue)
    } else {
      setOpened(false)
      if (oneValue === value) {
        onChange?.()
      } else {
        onChange?.(oneValue, initialDisplayValue || oneValue)
      }
    }
    onClick?.(event)
  }

  return (
    <Dropdown.Item onClick={handleClick}>
      {label}
      {!!hint && (<Font size="sm" fill="faint-down">{hint}</Font>)}
      {children}
    </Dropdown.Item>
  )
}
