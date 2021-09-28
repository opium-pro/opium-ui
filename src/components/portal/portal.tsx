import React, { FC, useEffect } from 'react'
import { usePortals } from './use-portals'

export interface PortalProps {}

export const Portal: FC<PortalProps> = ({ children }) => {
  const { openPortal, closePortal } = usePortals()

  useEffect(() => {
    const index = openPortal(children)
    return () => closePortal(index)
  }, [])

  return null
}