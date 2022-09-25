import React, { FC, PropsWithChildren } from 'react'
import { usePortals } from './use-portals.js'
import { createPortal } from 'react-dom'

export interface PortalProps { }

export const Portal: FC<PropsWithChildren<PortalProps>> = ({ children }) => {
  const { portalsNode } = usePortals()

  // useEffect(() => {
  //   const index = openPortal(children)
  //   return () => closePortal(index)
  // }, [])

  if (!portalsNode) { return null }
  return createPortal(children, portalsNode)
}