import React, { useEffect, useRef, useState } from 'react'
import { FC } from 'react'
import { Align, Fit, Box } from 'themeor'
import { Background } from '../background'
import { AppLayoutContext } from './context'


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

  function contentNodeRef(node) {
    getContentNode && getContentNode(node)
    setContentNode(node)
  }

  const context = { contentNode, sideMenuNode }

  return (
    <AppLayoutContext.Provider value={context}>
      <Align pattern="auto 1fr" vert="stretch" {...rest}>
        {menu && (
          <AppLayoutContext.Provider value={{ ...context, scrollNode: sideMenuNode }}>
            <Fit
              maxHeight="100vh"
              zIndex={200}
              forwardRef={setSideMenuNode}
              scroll
            >
              {menu}
            </Fit>
          </AppLayoutContext.Provider>
        )}

        <AppLayoutContext.Provider value={{ ...context, scrollNode: contentNode }}>
          <Align stretch>
            <Fit height="100vh" zIndex={100} scroll forwardRef={contentNodeRef}>

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
          </Align>
        </AppLayoutContext.Provider>
      </Align>

      <Fit zIndex={300} cover="screen" stick="top-left">
        {modals}
      </Fit>
    </AppLayoutContext.Provider>
  )
}