import { useContext, createContext } from "react"

export const AppLayoutContext: any = createContext({})

export const useAppLayout: any = () => useContext(AppLayoutContext)