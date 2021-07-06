import {useState} from 'react'
import Context from './context'

export type Props = React.AllHTMLAttributes<HTMLElement> & {
  fields: any,
  onSubmit: any,
}

export function Form ({children, onSubmit, fields}: Props) {
  const [context, setContext] = useState(fields)

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
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </Context.Provider>
  )
}