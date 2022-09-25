import React, { FC, useMemo, PropsWithChildren } from 'react'
import { Fit, Box } from 'themeor'
import { Spot } from './spot.js'

export interface BackgroundProps {
  fill?: string
}

export const Background: FC<PropsWithChildren<BackgroundProps>> = ({
  children,
  fill = 'faintDown',
  ...rest
}) => {
  const spots = useMemo(() => (
    <Fit clip cover="parent">
      <Spot reset />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
      <Spot reset={false} />
    </Fit>
  ), [])

  return (
    <Fit.TryTagless {...rest}>
      <Box fill={fill}>
        {spots}

        <Fit>
          {children}
        </Fit>
      </Box>
    </Fit.TryTagless>
  )
}