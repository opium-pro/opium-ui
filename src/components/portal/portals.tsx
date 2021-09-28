import React, { Fragment } from 'react'
import { Fit } from 'themeor'
import { portals } from './provider'


export const Portals = () => {
  return (
    <Fit zIndex={400} fixed left="0" top="0">
      {Array.from(portals).map(([index, value]) => (
        <Fragment key={`portal-${index}`}>{value}</Fragment>
      ))}
    </Fit>
  )
}