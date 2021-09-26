import { createContext, useContext, ContextType } from 'react'

export const DropdownContext: any = createContext({})

export const useDropdown: any = () => useContext(DropdownContext)