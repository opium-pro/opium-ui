import React from 'react'
import { Align, Fit, Box, Line, FitProps } from 'themeor'

type Props = FitProps & {}

export function Wrapper({ children, ...rest }: Props) {
  return (
    <Fit.TryTagless minHeight="100%" {...rest}>
      <Line.TryTagless right="md" fill="faint-down">
        <Box fill="base" shadow="md">
          <Align hor="stretch">
            {children}
          </Align>
        </Box>
      </Line.TryTagless>
    </Fit.TryTagless>
  )
}