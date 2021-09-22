import React from 'react'
import {useState} from 'react'
import Context from './context'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  onSubmit?: any
  onChange?: any
}

export function Form ({children, onSubmit, onChange, ...rest}: Props) {
  const [context, setContext] = useState({})

  function setField(name, value) {
    const newContext = {...context, [name]: value}
    setContext(newContext)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit?.(context)
  }

  function handleChange(e) {
    e.preventDefault()
    onChange?.(context)
  }

  return (
    <Context.Provider value={{...context, setField}}>
      <form {...rest} onSubmit={handleSubmit} onChange={handleChange}>
        {children}
      </form>
    </Context.Provider>
  )
}