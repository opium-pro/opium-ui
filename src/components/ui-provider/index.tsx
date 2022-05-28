import React, { FC } from 'react'
import { ScreenFit } from '../screen-fit'
import { PortalsProvider } from '../portal'
import { AppTheme, AppThemeProps } from '../app-theme'

export type UIProviderProps = AppThemeProps & {}


export const UIProvider: FC<UIProviderProps> = ({ children, ...rest }) => {
  return (
    <ScreenFit>
      <AppTheme {...rest}>
        <PortalsProvider>
            {children}
        </PortalsProvider>
      </AppTheme>
    </ScreenFit>
  )
}