import React from 'react'
import { usePortals } from './use-portals'
import { Fit } from 'themeor'

export const Portals = () => {
  const { portals } = usePortals()

  return (
    <Fit zIndex={400} fixed left="0" top="0" id="opium-portals">
      {Object.keys(portals).sort().map((key) => portals[key])}
    </Fit>
  )
}