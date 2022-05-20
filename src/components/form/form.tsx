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
  const changedFields = useRef({}).current
  const initialValues = useRef({}).current
  const [disabled, setDisabled] = useState(initialDisabled)
  const [changed, setChanged] = useState(false)
  const [hasError, setError] = useState(false)

  function setFields(value, registerChange = true) {
    Object.assign(fields, value)
    registerChange && onChange?.(fields)
  }

  function getFields() {
    return fields
  }

  function getChangedFields() {
    return changedFields
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

  function setField(name, value, registerChange = true) {
    const newFields = { ...fields }
    const newChanged = { ...changedFields }
    if (name?.includes?.('.') || name?.includes?.('[')) {
      // Парсим имя, если это не просто одно поле, а вложенные объекты
      mutateObjectForFields(newFields, parseFieldName(name), value)
      registerChange && mutateObjectForFields(newChanged, parseFieldName(name), value)
    } else {
      newFields[name] = value
      registerChange && (newChanged[name] = value)
    }
    registerChange && Object.assign(changedFields, newChanged)
    setFields(newFields, registerChange)
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
    onSubmit?.(fields, changedFields)
  }

  const context = {
    setField,
    setFields,
    getFields,
    getChangedFields,
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