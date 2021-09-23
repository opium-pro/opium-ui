import React from 'react'
import { Align, Fit, Box, Line, Gap } from 'themeor'

type Props = React.HTMLAttributes<HTMLElement> & {}

export function Wrapper({ children, ...rest }: Props) {
  return (
    <Fit.TryTagless {...rest} minHeight="100%">
      <Line.TryTagless right="md" fill="faint-down">
        <Box fill="base" shadow="md">
          <Align hor="stretch">

            <Gap hor="none">
              <Align gapVert="x3s">
                {children}
              </Align>
            </Gap>
          </Align>

        </Box>
      </Line.TryTagless>
    </Fit.TryTagless>
  )
}