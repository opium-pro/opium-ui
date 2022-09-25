import { useContext, createContext } from 'react'
import { Screen } from './constants.js'

export const ScreenFitContext = createContext({} as Screen)
export const useScreenFit = () => useContext(ScreenFitContext)