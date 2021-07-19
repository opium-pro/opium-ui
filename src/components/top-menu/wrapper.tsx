import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import { Ava } from '../ava'
import { LimitWidth } from '../limit-width'

type Props = React.HTMLAttributes<HTMLElement> & {}

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