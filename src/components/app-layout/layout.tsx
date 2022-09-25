import React, { useState, PropsWithChildren } from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Animate, Icon } from 'themeor'
import { MakeButton } from '../make-button/index.js'
import { AppLayoutContext, useAppLayout } from './context.js'
import { useScreenFit, ScreenFit } from '../screen-fit/index.js'
import { Cover } from '../cover/index.js'
import type { AppLayoutProps } from './types.js'


export const Layout: FC<PropsWithChildren<AppLayoutProps>> = ({
  menu,
  header,
  children,
  modals,
  getContentNode,
  footer,
  fill,
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
    <Fit.TryTagless zIndex={100} fixed clip left="0" top="0" right="0" bottom="0">
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
              <Box.TryTagless shadow="sm">
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
            <Box fill={fill}>
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
            </Box>
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