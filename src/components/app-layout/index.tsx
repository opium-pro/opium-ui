import React, { FC } from 'react'
import { Provider } from './provider.js'
import { Layout } from './layout.js'
import { AppLayoutProps } from './types.js'

export const AppLayout: FC<AppLayoutProps> = (props) => {
  return (
    <Provider><Layout {...props} /></Provider>
  )
}

export * from './context.js'
export * from './types.js'