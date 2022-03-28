import React, { useState } from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Animate, Icon } from 'themeor'
import { MakeButton } from '../make-button'
import { AppLayoutContext, useAppLayout } from './context'
import { useScreenFit, ScreenFit } from '../screen-fit'
import { Cover } from '../cover'
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
    <Align pattern={(menu && !isSmall) ? "auto 1fr" : "1fr"} maxHeight="100vh" vert="stretch" {...rest}>
      {isSmall && openMenu && (
        <Fit zIndex={190}>
          <Animate onMount="fadeIn">
            <Cover />
          </Animate>
        </Fit>
      )}
      {menu && (!isSmall || openMenu) && (
        <AppLayoutContext.Provider value={{ ...context, scrollNode: menuNode }}>
          <Fit.TryTagless
            maxHeight="100vh"
            zIndex={200}
            forwardRef={setMenuNode}
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
          clip={isSmall && openMenu}
          forwardRef={contentNodeRef}
        >
          <Box.TryTagless fill="faint-down">
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
  </>)
}