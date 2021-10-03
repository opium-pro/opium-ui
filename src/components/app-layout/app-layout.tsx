import React, { useEffect, useRef, useState } from 'react'
import { FC } from 'react'
import { Align, Fit } from 'themeor'
import { Background } from '../background'
import { AppLayoutContext } from './context'


type AppLayoutProps = {
  sideMenu?: any
  header?: any
  modals?: any
  getContentNode?: any
}

export const AppLayout: FC<AppLayoutProps> = ({
  sideMenu,
  header,
  children,
  modals,
  getContentNode,
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
        {sideMenu && (
          <AppLayoutContext.Provider value={{ ...context, scrollNode: sideMenuNode }}>
            <Fit
              maxHeight="100vh"
              zIndex={200}
              forwardRef={setSideMenuNode}
              scroll
            >
              {sideMenu}
            </Fit>
          </AppLayoutContext.Provider>
        )}

        <AppLayoutContext.Provider value={{ ...context, scrollNode: contentNode }}>
          <Align stretch>
            <Fit height="100vh" zIndex={100} scroll forwardRef={contentNodeRef}>

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
        </AppLayoutContext.Provider>
      </Align>

      <Fit zIndex={300} cover="screen" stick="top-left">
        {modals}
      </Fit>
    </AppLayoutContext.Provider>
  )
}