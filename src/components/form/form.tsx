import React, { useEffect } from 'react'
import { useState } from 'react'
import { FormContext } from './context'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  onSubmit?: any
  onChange?: any
  getContext?: any
}

export function Form({
  children,
  onSubmit,
  onChange,
  getContext,
  ...rest
}: Props) {
  const [fields, setFields] = useState({})
  const [initialValues, setInitialValues] = useState({})
  const [changed, setChanged] = useState(false)

  function reset() {
    setFields(initialValues)
    setChanged(false)
  }

  function setField(name, value) {
    const newContext = { ...fields, [name]: value }
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