import React from 'react'
import { FC } from 'react'
import { Align, Fit } from 'themeor'
import { Background } from '../background'


type AppLayoutProps = {
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
    <Align row vert="stretch" {...rest}>
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

      <Fit zIndex={300} cover="screen" stick="top-left">
        {modals}
      </Fit>
    </Align>
  )
}