import React, { FC } from 'react'
import { ScreenFit } from '../screen-fit/index.js'
import { PortalsProvider } from '../portal/index.js'
import { AppTheme, AppThemeProps } from '../app-theme/index.js'

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