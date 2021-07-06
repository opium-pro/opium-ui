import {useState, useContext, createContext} from 'react'
import Context from './context'

export const withForm = (Component: any) => ({useForm, ...rest}) => {
  const fields = useContext(Context)
  const field = {...fields[useForm]}
  const setField = fields.setField

  function handleChange(value) {
    field.value = value
    setField(useForm, field)
  }

  return (
    <Component
      {...rest}
      {...field}
      onChange={handleChange}
    />
  )
}