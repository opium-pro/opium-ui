import { FC } from 'react'
import { Provider } from './provider'
import { Layout } from './layout'
import { AppLayoutProps } from './types'

export const AppLayout: FC<AppLayoutProps> = (props) => {
  return (
    <Provider><Layout {...props} /></Provider>
  )
}

export * from './context'
export * from './types'