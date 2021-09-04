import React from 'react'
import { Align, Fit, Box } from 'themeor'

export type Props = React.HTMLAttributes<HTMLElement> & {}

export default function ({ children, ...rest }: Props) {
  return (
    <Fit.TryTagless left="-16px" {...rest}>
      <Box radius="md">
        <Align row vert="center">
          {children}
        </Align>
      </Box>
    </Fit.TryTagless>
  )
}