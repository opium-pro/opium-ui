import React, { FC, useEffect, useState } from 'react'
import { usePortals } from './use-portals'


export interface PortalProps {
  index?: number
}


export const Portal: FC<PortalProps> = ({ children, index: initialIndex }) => {
  const { addPortal, removePortal, portals } = usePortals()
  const [index, setIndex] = useState(initialIndex)

  // Render
  useEffect(() => {
    const newIndex = addPortal(index, children)
    if (newIndex !== index) {
      setIndex(newIndex)
    }
  }, [children])

  // Unmount
  useEffect(() => () => {
    removePortal(index)
  }, [])

  return null
}
