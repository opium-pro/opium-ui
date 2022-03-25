import React from 'react'
import { Align, Box, BoxProps } from 'themeor'
import { LimitWidth } from '../limit-width'

type Props = BoxProps & {}

export function Wrapper({ children, ...rest }: Props) {
  return (
    <Box fill="base" shadow="md" style={{
      position: 'sticky',
      top: '0',
      zIndex: 100,
    }} {...rest}>
      <LimitWidth>
        <Align row vert="center">
          {children}
        </Align>
      </LimitWidth>
    </Box>
  )
}