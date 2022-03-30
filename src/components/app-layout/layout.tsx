import React, { useState } from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Animate, Icon } from 'themeor'
import { MakeButton } from '../make-button'
import { AppLayoutContext, useAppLayout } from './context'
import { useScreenFit, ScreenFit } from '../screen-fit'
import { Cover } from '../cover'
import { Background } from '../background'
import type { AppLayoutProps } from './types'


export const Layout: FC<AppLayoutProps> = ({
  menu,
  header,
  children,
  modals,
  getContentNode,
  footer,
  ...rest
}) => {
  const { contentNode, menuNode, setContentNode, setMenuNode } = useAppLayout()
  const [openMenu, setOpenMenu] = useState(false)
  const { isSmall } = useScreenFit()

  function contentNodeRef(node: any) {
    getContentNode && getContentNode(node)
    setContentNode(node)
  }

  const context = { contentNode, menuNode }

  return (<>
    <Fit.TryTagless fixed clip left="0" top="0" right="0" bottom="0">
      <Align pattern={(menu && !isSmall) ? "auto 1fr" : "1fr"} vert="stretch" {...rest}>
        {isSmall && openMenu && (
          <Fit fixed zIndex={190}>
            <Animate onMount="fadeIn">
              <Cover />
            </Animate>
          </Fit>
        )}
        {menu && (!isSmall || openMenu) && (
          <AppLayoutContext.Provider value={{ ...context, scrollNode: menuNode }}>
            <Animate.TryTagless onMount={isSmall && "fadeInLeft" as any}>
              <Box.TryTagless fill="base">
                <Fit.TryTagless
                  zIndex={200}
                  forwardRef={setMenuNode}
                  absolute={isSmall}
                  top="0"
                  bottom="0"
                  left="0"
                  scroll
                >
                  <Align
                    hor="stretch"
                    vert="stretch"
                  >
                    {menu}
                  </Align>
                </Fit.TryTagless>
              </Box.TryTagless>
            </Animate.TryTagless>
          </AppLayoutContext.Provider>
        )}
        {isSmall && (
          <Animate.TryTagless onMount="fadeInDown">
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
          </Animate.TryTagless>
        )}

        <AppLayoutContext.Provider value={{ ...context, scrollNode: contentNode }}>
          <Fit.TryTagless
            stretch
            zIndex={100}
            height="100vh"
            scroll={!(isSmall && openMenu)}
            clip={isSmall && openMenu}
            forwardRef={contentNodeRef}
          >
              <Background>
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
              </Background>
          </Fit.TryTagless>
        </AppLayoutContext.Provider>
      </Align>
    </Fit.TryTagless>

    <Fit
      zIndex={300}
      cover="screen"
      stick="top-left"
    >
      {modals}
    </Fit>
  </>)
}