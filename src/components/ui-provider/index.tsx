import React from 'react'
import { FC } from 'react'
import { AppTheme, AppThemeProps } from '../app-theme'
import { PortalsProvider } from '../portal'


type UIProviderProps = AppThemeProps & {
  sideMenu?: any,
  header?: any,
  modals?: any,
}

export const UIProvider: FC<UIProviderProps> = ({ children, ...rest }) => {

  return (
    <AppTheme {...rest}>
      <PortalsProvider>
        {children}
      </PortalsProvider>
    </AppTheme>
  )
}