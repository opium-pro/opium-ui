import React, { useState } from 'react'
import { FC } from 'react'
import { AppLayoutContext } from './context'
import { ScreenFit } from '../screen-fit'
import { PortalsProvider } from '../portal'
import { AppTheme } from '../app-theme'


export const Provider: FC = ({ children }) => {
  const [contentNode, setContentNode] = useState()
  const [menuNode, setMenuNode] = useState()

  const context: AppLayoutContext = { contentNode, setContentNode, menuNode, setMenuNode }

  return (
    <ScreenFit>
      <AppTheme>
        <PortalsProvider>
          <AppLayoutContext.Provider value={context}>
            {children}
          </AppLayoutContext.Provider>
        </PortalsProvider>
      </AppTheme>
    </ScreenFit>
  )
}