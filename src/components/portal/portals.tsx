import React, { Fragment } from 'react'
import { Fit } from 'themeor'
import { portals } from './provider.js'


export const Portals = () => {
  return (
    <Fit zIndex={500} fixed left="0" top="0">
      {Array.from(portals).map(([index, value]) => (
        <Fragment key={`portal-${index}`}>{value}</Fragment>
      ))}
    </Fit>
  )
}