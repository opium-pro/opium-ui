import React, { useEffect, useMemo, useState } from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Animate, Icon } from 'themeor'
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
  const [openMenu, setOpenMenu] = useState(false)
  const { isSmall } = useScreenFit()

  function contentNodeRef(node) {
    getContentNode && getContentNode(node)
    setContentNode(node)
  }

  const context = { contentNode, sideMenuNode }

  return (
    <AppTheme>
      <PortalsProvider>
        <AppLayoutContext.Provider value={context}>
          <Align pattern={(menu && !isSmall) ? "auto 1fr" : "1fr"} maxHeight="100vh" vert="stretch" {...rest}>
            {isSmall && openMenu && (
              <Fit zIndex={190}>
                <Animate onMount="fadeIn">
                  <Cover />
                </Animate>
              </Fit>
            )}
            {menu && (!isSmall || openMenu) && (
              <AppLayoutContext.Provider value={{ ...context, scrollNode: sideMenuNode }}>
                <Fit.TryTagless
                  maxHeight="100vh"
                  zIndex={200}
                  forwardRef={setSideMenuNode}
                  scroll
                  absolute={isSmall}
                  top={isSmall && '0'}
                  right={isSmall && '0'}
                  bottom={isSmall && '0'}
                  left={isSmall && '0'}
                >
                  <Align hor={isSmall && "center" as any} vert={isSmall && "center" as any}>
                    {menu}
                  </Align>
                </Fit.TryTagless>
              </AppLayoutContext.Provider>
            )}
            {isSmall && (
              <Animate onMount="bounceInDown">
                <Fit fixed top="12px" right="12px" zIndex={300}>
                  <MakeButton radius="max" offset="0" onClick={() => setOpenMenu(value => !value)}>
                    <Box.TryTagless
                      shadow="lg"
                      radius="max"
                      width="60px"
                      height="60px"
                      fill="base"
                    >
                      <Align vert="center" hor="center">
                        <Icon size="xl" name={openMenu ? "cross" : "menu_burger"} />
                      </Align>
                    </Box.TryTagless>
                  </MakeButton>
                </Fit>
              </Animate>
            )}

            <AppLayoutContext.Provider value={{ ...context, scrollNode: contentNode }}>
              <Fit.TryTagless
                stretch
                zIndex={100}
                height="100vh"
                scroll={!(isSmall && openMenu)}
                forwardRef={contentNodeRef}
              >
                <Box.TryTagless fill="base-up">
                  <ScreenFit>
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
                  </ScreenFit>
                </Box.TryTagless>
              </Fit.TryTagless>
            </AppLayoutContext.Provider>
          </Align>

          <Fit
            zIndex={300}
            cover="screen"
            stick="top-left"
          >
            {modals}
          </Fit>
        </AppLayoutContext.Provider>
      </PortalsProvider>
    </AppTheme>
  )
}