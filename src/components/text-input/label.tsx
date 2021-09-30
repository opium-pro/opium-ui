import React from 'react'
import { Gap, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'
import { isDefined } from '../../utils'


export const Label = () => {
  const { value, label, error } = useTextInput()
  const { focus } = useReaction()
  const uptop = isDefined(value) || focus

  return (
    <Fit.TryTagless
      transition="100ms"
      absolute
      top="0"
      left="0"
      height={uptop ? "30px" : "50px"}
    >
      <Align.TryTagless vert="center">
        <Font.TryTagless
          fill={(error && 'critic') || "faint-down"}
          size={uptop ? "x2s" : "xs"}
          align="left"
        >
          <Gap.TryTagless hor="md">
            {label}
          </Gap.TryTagless>
        </Font.TryTagless>
      </Align.TryTagless>
    </Fit.TryTagless>
  )
}