import React, { useEffect, useState, FC } from 'react'
import { useForm } from './context'
import { getDeepFieldByPath } from '../../utils'

export type WithFormProps = {
  value?: any
  initialValue?: any
  name?: string
  match?: any
  error?: any
  onBlur?: any
  mask?: any
  disabled?: boolean
  required?: boolean
  label?: any
  onChange?: (newValue: any) => any,
  onRender?: (newValue: any) => any,
}

export type WithForm<ComponentProps> = FC<ComponentProps & WithFormProps>

export const withForm = (Component: any) => ({
  onChange = a => a,
  onRender = a => a,
  value,
  initialValue,
  name,
  match,
  error,
  onBlur,
  mask,
  disabled,
  required,
  label,
  ...rest
}: any) => {
  const [changed, setChanged]: any = useState(false)
  const [hasError, setError]: any = useState(error)

  const {
    setField,
    changed: formChanged,
    setChanged: setFormChanged,
    getFields,
    setInitialValue,
  } = useForm()

  let fieldValue = (changed && formChanged && name) ? getDeepFieldByPath(name, getFields()) : (value || '')
  const [valueState, setValueState]: any = useState(fieldValue)

  fieldValue = onRender?.(fieldValue)

  useEffect(() => {
    name && setInitialValue?.(name, initialValue || value)
  }, [])

  useEffect(() => {
    name && setField?.(name, value, true)
  }, [value])

  function handleBlur(value) {
    if (disabled) { return }
    onBlur?.(value)
    if (match && changed) {
      let errorText = ''
      for (const matchItem of match) {
        if (!fieldValue?.match(matchItem[0])) {
          errorText = errorText + ' ' + matchItem[1]
        }
      }
      setError(errorText || false)
    }

    if (changed && required && !fieldValue) {
      setError('This field is required')
    }
  }

  function handleChange(value) {
    !formChanged && setFormChanged?.(true)
    hasError && setError(false)
    !changed && setChanged(true)
    const newValue = onChange(value)
    name && setField?.(name, newValue)
    setValueState(newValue)
  }

  if (required && label) {
    label += ' *'
  }

  return (
    <Component
      {...rest}
      label={label}
      value={fieldValue}
      initialValue={value}
      name={name}
      onChange={!disabled && handleChange}
      onBlur={!disabled && handleBlur}
      error={hasError}
      disabled={disabled}
    />
  )
}