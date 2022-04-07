import React from 'react'
import { Align, Box, BoxProps, Fit } from 'themeor'
import { LimitWidth } from '../limit-width'

export type WrapperProps = BoxProps & {}

export function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <Fit {...rest}>
      <Box
        fill="base"
        shadow="md"
      >
        <LimitWidth scroll>
          <Align row vert="center">
            {children}
          </Align>
        </LimitWidth>
      </Box>
    </Fit>
  )
}