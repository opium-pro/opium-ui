import React from 'react'
import { Dropdown } from '../dropdown'
import { Font, Align, Gap, Fit } from 'themeor'
import { useSelect } from './context'
import { useTextInput } from "../text-input"
import { useDropdown } from '../dropdown'
import { Checkbox } from '../checkbox'


export const Option = ({
  value: oneValue,
  label = undefined,
  hint = undefined,
  children = undefined,
  displayValue = undefined,
  onClick = undefined,
  onCheckboxClick = undefined,
  active = false,
  ...rest
}) => {
  const { value, onChange } = useTextInput()
  const { multi } = useSelect()
  const { setOpened } = useDropdown()
  let checkboxRef

  const checked = multi && (active || value.includes(oneValue))

  function handleClick(event) {
    if (multi) {
      let newValue: any = new Set(Array.isArray(value) ? value : [value])
      if (newValue.has(oneValue)) {
        newValue.delete(oneValue)
      } else {
        newValue.add(oneValue)
      }
      newValue = Array.from(newValue)
      onChange?.(newValue)
    } else {
      setOpened(false)
      if (oneValue !== value) {
        onChange?.(oneValue)
      }
    }

    if (checkboxRef && checkboxRef.contains(event.tagget)) {
      onCheckboxClick ? onCheckboxClick(event) : (onClick && onClick(event))
      return
    }

    onClick && onClick(event)
  }

  return (
    <Dropdown.Item {...rest} onClick={handleClick}>
      <Align row vert="center">
        {multi && (<>
          <Checkbox
            checked={checked}
            forwardRef={n => checkboxRef = n}
          />
          <Gap />
        </>)}
        <Fit stretch>
          {label}
          {!!hint && (<Font size="sm" fill="faint-down">{hint}</Font>)}
          {children}
        </Fit>
      </Align>
    </Dropdown.Item>
  )
}
