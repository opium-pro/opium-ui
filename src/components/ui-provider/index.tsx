import React from 'react'
import { FC } from 'react'
import { Fit } from 'themeor'
import { AppTheme, AppThemeProps } from '../app-theme'
import { Portals, PortalsProvider } from '../portal'
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

          <Fit zIndex={0} cover="screen" stick="top-left">
            <Shadows />
          </Fit>

          {children}

          <Fit zIndex={400} cover="screen" stick="top-left">
            <Portals />
          </Fit>
        </ShadowRenderProvider>
      </PortalsProvider>
    </AppTheme>
  )
}