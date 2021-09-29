import React, { useEffect, useState } from 'react'
import { useForm } from './context'
import { getDeepFieldByPath } from '../../utils'

export const withForm = (Component: any) => ({
  onChange = a => a,
  value,
  displayValue,
  name,
  match,
  error,
  onBlur,
  mask,
  disabled,
  radio,
  ...rest
}: any) => {
  const [changed, setChanged]: any = useState(false)
  const [hasError, setError]: any = useState(error)
  const [display, setDisplay]: any = useState(displayValue)
  const {
    setField,
    changed: formChanged,
    setChanged: setFormChanged,
    fields,
    setInitialValue,
  } = useForm()

  const fieldValue = (changed && formChanged) ? getDeepFieldByPath(name, fields) : (value || '')

  useEffect(() => {
    setInitialValue?.(name, value)
  }, [])

  useEffect(() => {
    setField?.(name, value)
  }, [value])

  // useEffect(() => {
  //   if (!fieldValue && value && !radio) {
  //     setField?.(name, value)
  //   }
  // })

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
  }

  function handleChange(value) {
    !formChanged && setFormChanged?.(true)
    hasError && setError(false)
    !changed && setChanged(true)
    const result = onChange(value)
    let newValue = typeof result === 'string' ? result : value
    if (typeof displayValue === 'function') {
      setDisplay(displayValue(newValue))
    }
    setField?.(name, newValue)
  }

  return (
    <Component
      {...rest}
      value={fieldValue}
      displayValue={display}
      initialValue={value}
      name={name}
      onChange={!disabled && handleChange}
      onBlur={!disabled && handleBlur}
      error={hasError}
      disabled={disabled}
      radio={radio}
    />
  )
}