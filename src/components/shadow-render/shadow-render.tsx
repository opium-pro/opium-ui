import React, { FC, useEffect, useState } from 'react'
import { useShadowRender } from './use-shadow-render'


export interface ShadowRenderProps {
  index?: number
}


export const ShadowRender: FC<ShadowRenderProps> = ({ children, index: initialIndex }) => {
  const { addShadow, removeShadow } = useShadowRender()
  const [index, setIndex] = useState(initialIndex)

  // Render
  useEffect(() => {
    const newIndex = addShadow(index, children)
    if (newIndex !== index) {
      setIndex(newIndex)
    }
  }, [children])

  // Unmount
  useEffect(() => () => {
    removeShadow(index)
  }, [])

  return null
}
