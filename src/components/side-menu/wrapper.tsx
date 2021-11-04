import React from 'react'
import { Align, Fit, Box, Line, BoxProps } from 'themeor'

type Props = BoxProps & {}

export function Wrapper({ children, ...rest }: Props) {
  return (
    <Fit.TryTagless minHeight="100%">
      <Line.TryTagless right="md" fill="faint-down">
        <Box fill="base" shadow="md" {...rest}>
          <Align hor="stretch">
            {children}
          </Align>
        </Box>
      </Line.TryTagless>
    </Fit.TryTagless>
  )
}