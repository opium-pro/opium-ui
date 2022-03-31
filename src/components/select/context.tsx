import React from 'react'
import { createContext, useContext } from 'react'
import { SelectContextType, SelectProps } from './types'

export const SelectContext: SelectContextType = createContext({} as SelectProps)

export const useSelect = () => useContext(SelectContext as any)