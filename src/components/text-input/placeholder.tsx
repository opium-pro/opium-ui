import React from 'react'
import { Gap, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'


export const Placeholder = () => {
  const { focus } = useReaction()
  const { placeholder, value, label } = useTextInput()
  const show = placeholder && !value && (!label || focus)

  if (!show) { return null }

  return (
    <Fit.TryTagless
      absolute
      left="0"
      top={label ? '50%' : '11px'}
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