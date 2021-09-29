import React, { useEffect } from 'react'
import { useState } from 'react'
import { FormContext } from './context'
import { parseFieldName, mutateObjectForFields } from '../../utils'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  onSubmit?: any
  onChange?: any
  getContext?: any
  initialValues?: any
}



export function Form({
  children,
  onSubmit,
  onChange,
  getContext,
  initialValues: defaultInitialValues = {},
  disabled: initialDisabled,
  ...rest
}: Props) {
  const [fields, setFields] = useState(defaultInitialValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [initialValues, setInitialValues] = useState(defaultInitialValues)
  const [changed, setChanged] = useState(false)
  const [hasError, setError] = useState(false)

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
    let newContext = { ...fields }

    if (name?.includes?.('.') || name?.includes?.('[')) {
      // Парсим имя, если это не просто одно поле, а вложенные объекты
      mutateObjectForFields(newContext, parseFieldName(name), value)
    } else {
      newContext = { ...fields, [name]: value }
    }
    setFields(newContext)
  }

  function setInitialValue(name, value) {
    const newContext = { ...initialValues, [name]: value }
    setInitialValues(newContext)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit?.(fields)
  }

  useEffect(() => {
    if (changed) {
      onChange?.(fields)
    }
  }, [fields])

  const context = {
    fields,
    setField,
    setFields,
    initialValues,
    setInitialValue,
    setInitialValues,
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