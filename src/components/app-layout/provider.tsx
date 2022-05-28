import React, { useState } from 'react'
import { FC } from 'react'
import { AppLayoutContext } from './context'


export const Provider: FC = ({ children }) => {
  const [contentNode, setContentNode] = useState()
  const [menuNode, setMenuNode] = useState()

  const context: AppLayoutContext = { contentNode, setContentNode, menuNode, setMenuNode }

  return (
    <AppLayoutContext.Provider value={context}>
      {children}
    </AppLayoutContext.Provider>
  )
}