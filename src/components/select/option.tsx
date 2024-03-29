import React, { FC, useEffect } from 'react'
import { Dropdown } from '../dropdown/index.js'
import { Font, Align, Gap, Fit } from 'themeor'
import { useSelect } from './context.js'
import { Checkbox } from '../checkbox/index.js'
import { MarkMatch } from '../mark-match/index.js'
import { useForm, useField } from '../form/index.js'
import { isEqual } from 'lodash'


export type SelectOptionProps = {
  value: any
  label?: any
  hint?: any
  children?: any
  displayValue?: any
  onClick?: any
  onCheckboxClick?: any
  active?: boolean
}


export const Option: FC<SelectOptionProps> = ({
  value,
  label = value,
  hint,
  children,
  displayValue,
  onClick,
  onCheckboxClick,
  // active,
  ...rest
}) => {
  const { multi, name } = useSelect() as any
  const { setOpened, search } = Dropdown.use()
  const { getFields } = useForm()
  const { setValue } = useField()
  let checkboxRef

  const fullValue = getFields()[name] || []
  const active = !!fullValue?.filter?.(val => isEqual(val, value))?.length

  function handleClick(event) {
    if (multi) {
      let newValue
      if (active) {
        let index
        for (const i in fullValue) {
          if (isEqual(fullValue[i], value)) {
            index = i
            break
          }
        }
        newValue = [...fullValue]
        newValue.splice(index, 1)
      } else {
        newValue = [...fullValue, value]
      }
      setValue?.(newValue)
    } else {
      setOpened(false)
      if (!isEqual(fullValue, value)) {
        setValue?.(value)
      }
    }

    if (checkboxRef && checkboxRef.contains(event.tagget)) {
      onCheckboxClick ? onCheckboxClick(event) : (onClick?.(event))
      return
    }

    onClick?.(event)
  }

  return (
    <Dropdown.Item {...rest} onClick={handleClick}>
      <Align row vert="center">
        {multi && (<>
          <Checkbox
            value={active}
            forwardRef={n => checkboxRef = n}
            Tag='div'
          />
          <Gap />
        </>)}
        <Fit stretch>
          <Font fill={active ? "accent" : "base"} weight={active ? '600' : '500'}>
            <MarkMatch target={search}>{label}</MarkMatch>
          </Font>
          {!!hint && (<Font size="sm" fill="faintDown">
            <MarkMatch target={search}>{hint}</MarkMatch>
          </Font>)}
          {children}
        </Fit>
      </Align>
    </Dropdown.Item>
  )
}
