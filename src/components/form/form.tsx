import React from 'react'
import {useState} from 'react'
import Context from './context'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  onSubmit?: any
}

export function Form ({children, onSubmit, ...rest}: Props) {
  const [context, setContext] = useState({})

  function setField(name, value) {
    const newContext = {...context, [name]: value}
    setContext(newContext)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(context)
  }

  return (
    <Context.Provider value={{...context, setField}}>
      <form onSubmit={handleSubmit} {...rest}>
        {children}
      </form>
    </Context.Provider>
  )
}