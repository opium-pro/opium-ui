import React from 'react'
import {useContext} from 'react'
import Context from './context'

export const withForm = (Component: any) => ({onChange, name, ...rest}: any) => {
  const fields = useContext(Context)
  const field = {...fields[name]}
  const setField = fields.setField

  function handleChange(value) {
    onChange?.(value)
    field.value = onChange?.(value) || value
    setField(name, field)
  }

  return (
    <Component
      {...rest}
      {...field}
      name={name}
      onChange={handleChange}
    />
  )
}