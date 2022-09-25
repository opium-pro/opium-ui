import React from 'react'
import { Portal } from './portal.js'

export type WithPortalProps = {
  inPortal?: boolean
}

export function withPortal(Compoenen) {
  return function ({ inPortal = true, ...rest }) {
    return inPortal ? <Portal><Compoenen {...rest} /></Portal> : <Compoenen {...rest} />
  }
}