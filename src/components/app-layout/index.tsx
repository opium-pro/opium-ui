import React from 'react'
import { FC } from 'react'
import { Align, Fit } from 'themeor'
import { Background } from '../background'
import { AppTheme, AppThemeProps } from '../app-theme'
import { AppContext } from '../../context'
import { Portals, PortalsProvider } from '../portal'
import { Shadows, ShadowRenderProvider } from '../shadow-render'


type AppLayoutProps = AppThemeProps & {
  sideMenu?: any,
  header?: any,
  modals?: any,
}

export const AppLayout: FC<AppLayoutProps> = ({
  sideMenu,
  header,
  children,
  modals,
  ...rest
}) => {

  return (
    <AppContext.Provider value={{}}>
      <PortalsProvider>
        <ShadowRenderProvider>
          <AppTheme {...rest}>
            <Fit.TryTagless zIndex={0} cover="screen">
              <Shadows />
            </Fit.TryTagless>

            <Fit zIndex={300}>
              <Portals />
              {modals}
            </Fit>

            <Align row vert="stretch">
              {sideMenu && (
                <Fit
                  maxHeight="100vh"
                  zIndex={200}
                  scroll
                >
                  {sideMenu}
                </Fit>
              )}

              <Align stretch>
                <Fit height="100vh" zIndex={100} scroll>

                  <Fit.TryTagless minHeight="100vh" FORCE_TAGLESS>
                    <Background>


                      {header && (
                        <Fit.TryTagless style={{
                          position: 'sticky',
                          top: '0',
                          zIndex: 100,
                        }}>
                          {header}
                        </Fit.TryTagless>
                      )}


                      {children}
                    </Background>
                  </Fit.TryTagless>

                </Fit>
              </Align>
            </Align>
          </AppTheme>
        </ShadowRenderProvider>
      </PortalsProvider>
    </AppContext.Provider>
  )
}