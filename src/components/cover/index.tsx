import React, { FC } from 'react'
import { Box, Align, Fit, AlignProps } from 'themeor'


export interface CoverProps {}


export const Cover: FC<CoverProps & AlignProps> = ({ children, ...rest }) => {
  return (
    <Fit.TryTagless fixed left="0" top="0" width="100vw" height="100vh" scroll>
      <Box.TryTagless fill="baseDown" blur="md">
        <Align vert="center" hor="center" {...rest}>
          {children}
        </Align>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}
