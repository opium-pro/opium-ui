import React, { useEffect, useRef, useState } from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Gap, Icon } from 'themeor'
import { MakeButton } from '../make-button'
import { AppLayoutContext } from './context'
import { useScreenFit, ScreenFit } from '../screen-fit'
import { Cover } from '../cover'
import { PortalsProvider } from '../portal'
import { AppTheme } from '../app-theme'


type AppLayoutProps = {
  menu?: any
  header?: any
  footer?: any
  modals?: any
  getContentNode?: any
}

export const AppLayout: FC<AppLayoutProps> = ({
  menu,
  header,
  children,
  modals,
  getContentNode,
  footer,
  ...rest
}) => {
  const [contentNode, setContentNode] = useState()
  const [sideMenuNode, setSideMenuNode] = useState()
  const { isSmall } = useScreenFit()

  function contentNodeRef(node) {
    getContentNode && getContentNode(node)
    setContentNode(node)
  }

  const context = { contentNode, sideMenuNode }

  const renderMobileButton = (
    <Fit fixed top="12px" right="12px" zIndex={1000}>
      <MakeButton radius="max" offset="0">
        <Box.TryTagless shadow="lg" radius="max" width="60px" height="60px">
          <Align vert="center" hor="center">
            <Icon size="xl" name="cross" />
          </Align>
        </Box.TryTagless>
      </MakeButton>
    </Fit>
  )

  return (
    <AppTheme>
      <PortalsProvider>
        <AppLayoutContext.Provider value={context}>
          <Align pattern={(menu && !isSmall) ? "auto 1fr" : "1fr"} maxHeight="100vh" vert="stretch" {...rest}>
            {menu && (
              <AppLayoutContext.Provider value={{ ...context, scrollNode: sideMenuNode }}>
                <Fit
                  maxHeight="100vh"
                  zIndex={200}
                  forwardRef={setSideMenuNode}
                  scroll
                  absolute={isSmall}
                  top={isSmall && '0'}
                  right={isSmall && '0'}
                  bottom={isSmall && '0'}
                >
                  {menu}
                </Fit>
              </AppLayoutContext.Provider>
            )}

            <AppLayoutContext.Provider value={{ ...context, scrollNode: contentNode }}>
              <Fit.TryTagless zIndex={100}>
                <ScreenFit>
                  <Fit stretch height="100vh" scroll forwardRef={contentNodeRef}>
                    <Box fill="base-up">
                      <Align minHeight="100vh">
                        {header && (
                          <Fit.TryTagless style={{
                            position: 'sticky',
                            top: '0',
                            zIndex: 100,
                          }}>
                            {header}
                          </Fit.TryTagless>
                        )}
                        <Fit stretch>
                          {children}
                        </Fit>
                        {footer}
                      </Align>
                    </Box>

                  </Fit>

                  {isSmall && <Cover />}
                </ScreenFit>
              </Fit.TryTagless>
            </AppLayoutContext.Provider>
          </Align>

          <Fit zIndex={300} cover="screen" stick="top-left">
            {modals}
          </Fit>

          {renderMobileButton}
        </AppLayoutContext.Provider>
      </PortalsProvider>
    </AppTheme>
  )
}