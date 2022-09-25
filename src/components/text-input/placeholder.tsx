import React from 'react'
import { Gap, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context.js'


export const Placeholder = () => {
  const { focus } = useReaction()
  const { placeholder, value, label } = useTextInput()
  const show = placeholder && !value && (!label || focus)

  if (!show) { return null }

  return (
    <Fit.TryTagless
      absolute
      left="0"
      right="0"
      top={label ? '26px' : '11px'}
    >
      <Align.TryTagless vert="center">
        <Font.TryTagless
          size="sm"
          fill="faintDown"
          weight="400"
          family="regular"
          lineHeight="md"
          align="left"
          nowrap
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