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
  displayValue: oneDisplayValue = undefined,
}) {
  const { value, onChange } = useTextInput()
  const { multi, displayValue, setDisplayValue } = useSelect()
  const { setOpened } = useDropdown()

  function handleClick(event) {
    if (multi) {
      let newValue: any = new Set(Array.isArray(value) ? value : [value])
      let newDisplayValue: any = new Set(Array.isArray(displayValue) ? displayValue : [displayValue])
      if (newValue.has(oneValue)) {
        newValue.delete(oneValue)
        newDisplayValue.delete(oneDisplayValue)
      } else {
        newValue.add(oneValue)
        newDisplayValue.add(oneDisplayValue)
      }
      newValue = Array.from(newValue)
      newDisplayValue = Array.from(newDisplayValue)
      setDisplayValue(newDisplayValue)
      onChange?.(newValue)
    } else {
      setOpened(false)
      if (oneValue === value) {
        onChange?.()
        setDisplayValue()
      } else {
        onChange?.(oneValue)
        setDisplayValue(oneValue)
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
