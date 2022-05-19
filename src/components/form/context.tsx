import {createContext, useContext} from 'react'

export const FormContext = createContext({} as {
  setField?: (...args: any) => any
  setFields?: (...args: any) => any
  initialValues?: {[key: string]: any}
  setInitialValue?: (...args: any) => any
  changed?: boolean
  setChanged?: (...args: any) => any
  reset?: (...args: any) => any
  hasError?: boolean
  setError?: (...args: any) => any
  getFields?: () => any
})

export const useForm = () => useContext(FormContext)