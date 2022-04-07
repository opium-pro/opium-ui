import React, { FC } from 'react'
import { Align, Fit, Box, AlignProps } from 'themeor'


export type WrapperProps = AlignProps & {}

export const Wrapper: FC<WrapperProps> = ({ children, ...rest }) => {
  return (
    <Fit.TryTagless
      maxHeight="100%"
      minWidth="100px"
      maxWidth="100%"
      stretch
      scroll
    >
      <Box.TryTagless fill="base">
        <Align hor="stretch" {...rest}>
          {children}
        </Align>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}