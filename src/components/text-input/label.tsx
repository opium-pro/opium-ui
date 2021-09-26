import React from 'react'
import { Gap, Align, Font, Fit, useReaction, Effect } from 'themeor'
import { useTextInput } from './context'


export const Label = () => {
  const { value, fieldId, label, error } = useTextInput()
  const { focus } = useReaction()

  return (<>
    {/* Label click area */}
    <Effect.TryTagless smooth>
      <Fit.TryTagless
        cover="parent"
        zIndex={(focus || value) ? undefined : 1}
      >
        <label htmlFor={fieldId} />
      </Fit.TryTagless>
    </Effect.TryTagless>

    {/* Label */}
    <Fit.TryTagless
      cover="parent"
      height={(value || focus) ? "30px" : "50px"}
    >
      <Align.TryTagless vert="center">
        <Font.TryTagless
          fill={(error && 'critic') || "faint-down"}
          size={(value || focus) ? "x2s" : "xs"}
          style={{ transition: "all 0.1s ease" }}
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