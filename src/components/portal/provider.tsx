import React, { useState } from 'react'
import { PortalsContext } from './use-portals.js'
import { Portals } from './portals.js'
import { Fit } from 'themeor'
import { useForceUpdate } from '../../utils/index.js'

export const portals = new Map()
let id = 0

export function PortalsProvider({ children }) {
  const [update] = useForceUpdate()
  const [portalsNode, setPortalsNode] = useState()

  function closePortal(index) {
    portals.delete(index)
    update()
  }

  function openPortal(value) {
    const index = id++
    portals.set(index, value)
    update()
    return index
  }

  return (
    <PortalsContext.Provider
      value={{
        portals,
        openPortal,
        closePortal,
        update,
        portalsNode,
      }}
    > 
      {children}
      <Fit zIndex={400} fixed left="0" top="0" forwardRef={setPortalsNode} />

      {/* Это нужно, чтобы вызывать порталы через функцию, без прямого рендера */}
      <Portals />
    </PortalsContext.Provider>
  )
}