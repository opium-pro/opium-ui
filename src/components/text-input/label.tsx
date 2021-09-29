import React from 'react'
import { Gap, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'


export const Label = () => {
  const { value, fieldId, label, error, displayValue } = useTextInput()
  const { focus, cursor } = useReaction()
  const uptop = value || displayValue || focus

  return (<>
    {/* Label click area */}
    <Fit.TryTagless
      cover="parent"
      cursor={cursor}
      zIndex={uptop ? undefined : 1}
    >
      <label htmlFor={fieldId} />
    </Fit.TryTagless>

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
  </>)
}