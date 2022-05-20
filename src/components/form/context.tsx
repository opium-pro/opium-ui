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
  getChangedFields?: () => any
})
export const useForm = () => useContext(FormContext)


export const FieldContext = createContext({} as {
  changed?: boolean
  setChanged?: (...args: any) => any
  hasError?: string | boolean
  setError?: (...args: any) => any
  value?: any
  setValue?: (...args: any) => any
  initialValue?: any
})
export const useField = () => useContext(FieldContext)