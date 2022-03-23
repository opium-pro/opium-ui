import React from 'react'
import { Align, Fit, Box, Line, BoxProps } from 'themeor'
import { useScreenFit } from '../screen-fit'


type Props = BoxProps & {
  size?: number
}

export function Wrapper({ size, children, ...rest }: Props) {
  const { isSmall } = useScreenFit()

  return (
    <Fit.TryTagless minHeight="100%" width={size} minWidth={isSmall ? '200px' : '100px'} scroll maxWidth="100%">
      <Line.TryTagless right={isSmall && "md"} left={isSmall && "md"} fill="faint-down">
        <Box.TryTagless fill="base" shadow="md" {...rest}>
          <Align hor="stretch">
            {children}
          </Align>
        </Box.TryTagless>
      </Line.TryTagless>
    </Fit.TryTagless>
  )
}