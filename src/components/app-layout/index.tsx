import React, { useState } from 'react'
import { FC } from 'react'
import { Align, Fit, Gap } from 'themeor'
import { Background } from '../background'
import { AppTheme, AppThemeProps } from '../app-theme'
import { AppContext } from '../../context'

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
  const [portal, setPortal] = useState([])

  return (
    <AppContext.Provider value={{portal, setPortal}}>
      <AppTheme {...rest}>
        <Fit zIndex={300}>
          {modals}
          {portal}
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
    </AppContext.Provider>
  )
}