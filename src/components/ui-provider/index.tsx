import React from 'react'
import { FC } from 'react'
import { Fit } from 'themeor'
import { AppTheme, AppThemeProps } from '../app-theme'
import { PortalsProvider } from '../portal'
import { Shadows, ShadowRenderProvider } from '../shadow-render'


type UIProviderProps = AppThemeProps & {
  sideMenu?: any,
  header?: any,
  modals?: any,
}

export const UIProvider: FC<UIProviderProps> = ({ children, ...rest }) => {

  return (
    <AppTheme {...rest}>
      <PortalsProvider>
        <ShadowRenderProvider>

          <Fit zIndex={0} fixed top="0" left="0">
            <Shadows />
          </Fit>

          {children}
        </ShadowRenderProvider>
      </PortalsProvider>
    </AppTheme>
  )
}