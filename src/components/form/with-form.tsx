import React, { useContext, useState } from 'react'
import Context from './context'

export const withForm = (Component: any) => ({
  onChange,
  value,
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

  const fields = useContext(Context) || {}
  const setField = fields?.setField
  let fieldValue: string = fields[name]

  if (fieldValue === undefined && value && !radio) {
    fieldValue = value
    setField?.(name, fieldValue)
  }

  function handleBlur(value) {
    if (disabled) {
      return
    }

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
    hasError && setError(false)
    !changed && setChanged(true)

    const result = onChange?.(value)
    let newValue = typeof result === 'string' ? result : value
    setField?.(name, newValue)
  }

  return (
    <Component
      {...rest}
      value={fieldValue}
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