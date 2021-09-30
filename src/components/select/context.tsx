import { createContext, useContext } from 'react'
import { SelectContextType } from './types'

export const SelectContext: SelectContextType = createContext({})

export const useSelect = () => useContext(SelectContext)