import {createContext, useContext} from 'react'

export const SelectContext: any = createContext({})

export const useSelect: any = () => useContext(SelectContext)