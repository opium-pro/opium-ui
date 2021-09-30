import React from 'react'
import { Gap, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'
import { isDefined } from '../../utils'


export const Label = () => {
  const { value, fieldId, label, error } = useTextInput()
  const { focus, cursor } = useReaction()
  const uptop = isDefined(value) || focus

  return (<>
    {/* Label */}
    <Fit.TryTagless
      transition="100ms"
      cover="parent"
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

    {/* Label click area */}
    <Fit.TryTagless
      cover="parent"
      cursor={cursor}
      zIndex={1}
    >
      <label htmlFor={fieldId} />
    </Fit.TryTagless>
  </>)
}