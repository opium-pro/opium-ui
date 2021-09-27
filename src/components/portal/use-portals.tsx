import { createContext, useContext } from 'react'

export const PortalsContext = createContext({})
export const usePortals: any = () => useContext(PortalsContext)
