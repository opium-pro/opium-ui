import { createContext, useContext } from 'react'

export const TextInputContext: any = createContext({})

export const useTextInput: any = () => useContext(TextInputContext)