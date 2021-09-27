import React, { FC, useEffect, useState } from 'react'
import { usePortals } from './use-portals'
import { createPortal } from 'react-dom'

let id = 0
export interface PortalProps { }

export const Portal: FC<PortalProps> = ({ children }) => {
  const [currentNode, setCurrentNode]: any = useState()
  const [parentNode, setParentNode]: any = useState()
  const [index]: any = useState(id++)

  useEffect(() => {
    setParentNode(document.getElementById('opium-portals'))
    setCurrentNode(document.createElement('div'))
  }, [])

  useEffect(() => {
    if (!parentNode || !currentNode) { return null }
    parentNode.appendChild(currentNode)
    currentNode.id = `opium-${index}`
  }, [currentNode, parentNode])

  if (!currentNode) { return null }

  return createPortal(children, currentNode)
}
