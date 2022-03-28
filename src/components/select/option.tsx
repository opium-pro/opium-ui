import React from 'react'
import { Dropdown } from '../dropdown'
import { Font, Align, Gap, Fit } from 'themeor'
import { useSelect } from './context'
import { useTextInput } from "../text-input"
import { useDropdown } from '../dropdown'
import { Checkbox } from '../checkbox'
import { MarkMatch } from '../mark-match'


export const Option = ({
  value: oneValue  = undefined as any,
  label = undefined as string,
  hint = undefined as string,
  children = undefined,
  displayValue = undefined,
  onClick = undefined,
  onCheckboxClick = undefined,
  active = false,
  ...rest
}) => {
  const { value, onChange } = useTextInput()
  const { multi, onCompare } = useSelect()
  const { setOpened } = useDropdown()
  const { search } = useDropdown()
  let checkboxRef

  const selected = active
    || (typeof onCompare === 'function' && onCompare(value, oneValue, multi))
    || (multi ? value?.includes(oneValue) : (value === oneValue))

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
            value={selected}
            forwardRef={n => checkboxRef = n}
          />
          <Gap />
        </>)}
        <Fit stretch>
          <Font fill={selected ? "complement" : "base"} weight={selected ? '600' : '500'}>
            <MarkMatch target={search}>{label}</MarkMatch>
          </Font>
          {!!hint && (<Font size="sm" fill="faint-down">
            <MarkMatch target={search}>{hint}</MarkMatch>
          </Font>)}
          {children}
        </Fit>
      </Align>
    </Dropdown.Item>
  )
}
