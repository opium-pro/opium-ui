import { useContext, createContext, Dispatch } from 'react'


export type AppLayoutContext = {
  contentNode?: HTMLElement
  setContentNode?: Dispatch<() => any>
  menuNode?: HTMLElement
  setMenuNode?: Dispatch<() => any>
  scrollNode?: HTMLElement
}


export const AppLayoutContext = createContext({} as AppLayoutContext)
export const useAppLayout = () => useContext(AppLayoutContext)