import React, {useContext, useState, useEffect} from 'react'
import Context from './context'

export const withForm = (Component: any) => ({onChange, value, name, ...rest}: any) => {
  if (!name) {
    return (
      <Component
        {...rest}
        value={value}
        name={name}
        onChange={onChange}
      />
    )
  }

  const [changed, setChanged]: any = useState(false)
  const fields = useContext(Context)
  const setField = fields.setField
  let fieldValue: string = fields[name]

  if (!changed && fieldValue === undefined && value) {
    fieldValue = value
    setField(name, fieldValue)
  }

  function handleChange(value) {
    !changed && setChanged(true)
    const result = onChange?.(value)
    const newValue = typeof result === 'string' ? result : value
    setField(name, newValue)
  }

  return (
    <Component
      {...rest}
      value={fieldValue}
      name={name}
      onChange={handleChange}
    />
  )
}