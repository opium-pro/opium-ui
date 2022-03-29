import {createContext, useContext} from 'react'

export const FormContext = createContext({} as {
  fields?: {[key: string]: any}
  setField?: (...args: any) => any
  setFields?: (...args: any) => any
  initialValues?: {[key: string]: any}
  setInitialValue?: (...args: any) => any
  setInitialValues?: (...args: any) => any
  changed?: boolean
  setChanged?: (...args: any) => any
  reset?: (...args: any) => any
  hasError?: boolean
  setError?: (...args: any) => any
})

export const useForm = () => useContext(FormContext)