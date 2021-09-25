import React from 'react'
import { Effect } from 'themeor'
import { useShadowRender } from './use-shadow-render'

export const Shadows = () => {
  const { shadows } = useShadowRender()

  return (
    <Effect transparency="max">
      {Object.keys(shadows).sort().map((key) => shadows[key])}
    </Effect>
  )
}