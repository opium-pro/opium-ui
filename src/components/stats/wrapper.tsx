import React from 'react'
import { Align, Fit, Box, Line, BoxProps } from 'themeor'


type Props = BoxProps & {}

export function Wrapper({ children, ...rest }: Props) {
  return (
    <Fit.TryTagless scroll>
      <Line.TryTagless weight="md" fill="faint">
        <Box.TryTagless radius="md" {...rest}>
          <Align hor="stretch" vert="stretch" row>
            {children}
          </Align>
        </Box.TryTagless>
      </Line.TryTagless>
    </Fit.TryTagless>
  )
}