import { createContext, useContext } from 'react'

export const DropdownContext: any = createContext({})

export const useDropdownContext: any = () => useContext(DropdownContext)