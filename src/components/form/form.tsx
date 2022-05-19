import React, { useEffect, useRef, useState, useCallback, memo, useMemo } from 'react'
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
  const fields = useRef(defaultInitialValues).current
  const initialValues = useRef({}).current
  const [disabled, setDisabled] = useState(initialDisabled)
  const [changed, setChanged] = useState(false)
  const [hasError, setError] = useState(false)

  function setFields(value, silent = false) {
    Object.assign(fields, value)
    !silent && onChange?.(fields)
  }

  function getFields() {
    return fields
  }

  useEffect(() => {
    if (initialDisabled !== disabled) {
      setDisabled(initialDisabled)
    }
  }, [initialDisabled])

  function reset() {
    setFields(initialValues)
    setChanged(false)
  }

  function setField(name, value, silent = false) {
    const newFields = { ...fields }
    if (name?.includes?.('.') || name?.includes?.('[')) {
      // Парсим имя, если это не просто одно поле, а вложенные объекты
      mutateObjectForFields(newFields, parseFieldName(name), value)
    } else {
      newFields[name] = value
    }
    setFields(newFields, silent)
  }

  function setInitialValue(name, value) {
    if (name?.includes?.('.') || name?.includes?.('[')) {
      // Парсим имя, если это не просто одно поле, а вложенные объекты
      mutateObjectForFields(initialValues, parseFieldName(name), value)
    } else {
      Object.assign(initialValues, { [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(fields)
  }

  const context = {
    setField,
    setFields,
    getFields,
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