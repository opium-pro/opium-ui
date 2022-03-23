import { useContext, createContext } from 'react'
import { Screen } from './constants'

export const ScreenFitContext = createContext({} as Screen)
export const useScreenFit = () => useContext(ScreenFitContext)