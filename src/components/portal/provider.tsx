import React from 'react'
import { PortalsContext } from './use-portals'
import { Portals } from './portals'
import { useForceUpdate } from '../../utils'

export const portals = new Map()
let id = 0

export function PortalsProvider({ children }) {
  const [update] = useForceUpdate()

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
      }}
    > 
      <Portals />
      {children}
    </PortalsContext.Provider>
  )
}