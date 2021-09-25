import { createContext, ReactNode, useContext } from "react"


export const AppContext = createContext({})

export const useAppContext: any = () => useContext(AppContext)