import React, { FC } from 'react'
import { Box, Align, Fit, AlignProps } from 'themeor'


export interface CoverProps {}


export const Cover: FC<CoverProps & AlignProps> = ({ children, ...rest }) => {
  return (
    <Fit.TryTagless cover="screen" scroll>
      <Box.TryTagless fill="base-down" blur="md">
        <Align vert="center" hor="center" {...rest}>
          {children}
        </Align>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}
