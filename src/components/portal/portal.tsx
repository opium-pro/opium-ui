import React, { FC, useEffect, useState } from 'react'
import { usePortals } from './use-portals'


export interface PortalProps {
  index?: number
}


export const Portal: FC<PortalProps> = ({ children, index: initialIndex }) => {
  const { addPortal, removePortal } = usePortals()

  // Render
  useEffect(() => {
    const index = addPortal(children)
    return () => removePortal(index)
  }, [])

  return null
}
