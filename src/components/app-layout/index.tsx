import React from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Font, Line, Gap } from 'themeor'
import { Background } from '../background'
import { LimitWidth } from '../limit-width'
import { AppTheme } from '../app-theme'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  sideMenu?: any,
  header?: any,
}

export const AppLayout: FC<Props> = ({ sideMenu, header, children }) => {
  return (
    <AppTheme>
      <Align row vert="stretch">

        {sideMenu && (
          <Fit.TryTagless
            maxHeight="100vh"
            scroll
            zIndex={200}
            width="120px"
            FORCE_TAGLESS
          >
            {sideMenu}
          </Fit.TryTagless>
        )}

        <Align.Spacer>
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
        </Align.Spacer>
      </Align>
    </AppTheme>
  )
}