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
  ...rest
}: Props) {
  const [fields, setFields] = useState(defaultInitialValues)
  const [initialValues, setInitialValues] = useState(defaultInitialValues)
  const [changed, setChanged] = useState(false)

  function reset() {
    setFields(initialValues)
    setChanged(false)
  }

  function setField(name, value) {
    let newContext = { ...fields }

    if (name.includes('.') || name.includes('[')) {
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
    initialValues,
    setInitialValue,
    changed,
    setChanged,
    reset,
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