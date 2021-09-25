import React, { useState } from 'react'
import { FC } from 'react'
import { Align, Fit, Gap } from 'themeor'
import { Background } from '../background'
import { AppTheme, AppThemeProps } from '../app-theme'
import { Modal } from '../modal'
import { Button } from '../button'

type AppLayoutProps = AppThemeProps & {
  sideMenu?: any,
  header?: any,
}

export const AppLayout: FC<AppLayoutProps> = ({ sideMenu, header, children, ...rest }) => {

  return (
    <AppTheme {...rest}>
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

      <Fit zIndex={300}>
        <Modal
          width="600px"
          title="Заголовокчек"
          text="Ты уверен, что хочешь совершить эту херню???"
          onClose={() => true}
          footer={(<>
            <Button glow stretch primary label="asdasds" />
            <Gap size="8px" />
            <Button glow stretch label="asdasds" />
          </>)}
        >
          asdasdasds<br />
          asdasdasds<br />
          asdasdasds<br />
          asdasdasds<br />
          asdaasdasdasdasdasdsdasds<br />
          asdasdasds<br />
          asdasdasds<br />
          asdasasdasdasdasdasdasddasds asdasasdasdasdasdasdasddasds<br />
          asdasdasds asdasasdasdasdasdasdasddasds<br />
          asdasdasds<br />
          asdasdasdasdasdasdadadasdasdasds<br />
        </Modal>
      </Fit>
    </AppTheme>
  )
}