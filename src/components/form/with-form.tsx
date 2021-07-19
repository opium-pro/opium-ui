import React from 'react'
import {useContext} from 'react'
import Context from './context'

export interface IWithFormProps {
  useForm?: any
}

export const withForm = (Component: any) => ({useForm, ...rest}: any) => {
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