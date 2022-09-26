import React from 'react'
import { Provider } from './provider.js'
import { Layout } from './layout.js'
import { AppLayoutProps } from './types.js'

export const AppLayout = (props: AppLayoutProps) => {
  return (
    <Provider><Layout {...props} /></Provider>
  )
}

export * from './context.js'
export * from './types.js'