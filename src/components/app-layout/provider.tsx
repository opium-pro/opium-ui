import React, { useState, PropsWithChildren, FC } from 'react'
import { AppLayoutContext } from './context.js'


export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [contentNode, setContentNode] = useState()
  const [menuNode, setMenuNode] = useState()

  const context: AppLayoutContext = { contentNode, setContentNode, menuNode, setMenuNode }

  return (
    <AppLayoutContext.Provider value={context}>
      {children}
    </AppLayoutContext.Provider>
  )
}