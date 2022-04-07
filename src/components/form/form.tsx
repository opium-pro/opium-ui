import React, { useEffect, useRef, useState } from 'react'
import { FormContext } from './context'
import { parseFieldName, mutateObjectForFields } from '../../utils'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  onSubmit?: any
  onChange?: any
  getContext?: any
  initialValues?: any
  name?: string
}



export function Form({
  children,
  onSubmit,
  onChange,
  getContext,
  name,
  initialValues: defaultInitialValues = {},
  disabled: initialDisabled,
  ...rest
}: Props) {
  const [fields, setFields] = useState(defaultInitialValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [changed, setChanged] = useState(false)
  const [hasError, setError] = useState(false)

  const initialValues = useRef({}).current

  useEffect(() => {
    if (initialDisabled !== disabled) {
      setDisabled(initialDisabled)
    }
  }, [initialDisabled])

  function reset() {
    setFields(initialValues)
    setChanged(false)
  }

  function setField(name, value) {
    const newFields = {...fields}
    if (name?.includes?.('.') || name?.includes?.('[')) {
      // Парсим имя, если это не просто одно поле, а вложенные объекты
      mutateObjectForFields(newFields, parseFieldName(name), value)
    } else {
      newFields[name] = value
    }
    setFields(newFields)
  }

  function setInitialValue(name, value) {
    if (name?.includes?.('.') || name?.includes?.('[')) {
      // Парсим имя, если это не просто одно поле, а вложенные объекты
      mutateObjectForFields(initialValues, parseFieldName(name), value)
    } else {
      Object.assign(initialValues, { [name]: value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit?.(fields)
  }

  useEffect(() => {
    onChange?.(fields)
  }, [fields])


  const context = {
    fields,
    setField,
    setFields,
    initialValues,
    setInitialValue,
    changed,
    setChanged,
    reset,
    hasError,
    setError,
  }


  getContext?.(context)

  return (
    <FormContext.Provider value={context}>
      <form {...rest} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}