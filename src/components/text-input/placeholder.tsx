import React from 'react'
import { Gap, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'


export const Placeholder = () => {
  const { focus } = useReaction()
  const { placeholder, value } = useTextInput()

  if (!placeholder || value || !focus) {
    return null
  }

  return (
    <Fit.TryTagless
      stick="top-left"
      top="50%"
    >
      <Align.TryTagless vert="center">
        <Font.TryTagless
          size="sm"
          fill="faint-down"
          weight="400"
          family="regular"
          align="left"
        >
          <Gap.TryTagless
            hor="md"
          >
            {placeholder}
          </Gap.TryTagless>
        </Font.TryTagless>
      </Align.TryTagless>
    </Fit.TryTagless>
  )
}