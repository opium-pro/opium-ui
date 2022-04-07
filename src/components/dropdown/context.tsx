import { createContext, useContext } from 'react'

export const DropdownContext = createContext({} as {
  opened?: boolean
  setOpened?: any
  dropdownNode?: any
  search?: string
  setSearch?: any
  withSearch?: boolean
})

export const useDropdown = () => useContext(DropdownContext)