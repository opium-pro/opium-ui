import React from 'react'
import { usePortals } from './use-portals'

export const Portals = () => {
  const { portals } = usePortals()

  return (<>
    {Object.keys(portals).sort().map((key) => portals[key])}
  </>)
}