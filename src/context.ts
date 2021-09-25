import { createContext, useContext } from "react"

export const AppContext = createContext({
  portal: undefined as any[],
  setPortal: undefined as (portals: any[]) => void,
})

export const useAppContext = () => useContext(AppContext)