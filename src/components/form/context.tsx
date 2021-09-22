import {createContext, useContext} from 'react'

export const FormContext = createContext({} as {[key: string]: any})

export const useForm = () => useContext(FormContext)