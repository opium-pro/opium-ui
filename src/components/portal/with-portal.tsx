import React from 'react'
import { usePortals } from './use-portals'

export type WithPortalProps = {
  inPortal?: boolean
}

export function withPortal(Compoenen) {
  return function ({ inPortal = true, ...rest }) {
    const { openPortal } = usePortals()
    return inPortal ? openPortal(<Compoenen {...rest} />) : <Compoenen {...rest} />
  }
}