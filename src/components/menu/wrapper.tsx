import React from 'react'
import { Align, Fit, Box, Line, BoxProps } from 'themeor'

type Props = BoxProps & {
  size?: number
}

export function Wrapper({ size, children, ...rest }: Props) {
  return (
    <Fit.TryTagless minHeight="100%" width={size}>
      <Line.TryTagless right="md" fill="faint-down">
        <Box.TryTagless fill="base" shadow="md" {...rest}>
          <Align hor="stretch">
            {children}
          </Align>
        </Box.TryTagless>
      </Line.TryTagless>
    </Fit.TryTagless>
  )
}