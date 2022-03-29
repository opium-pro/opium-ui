import React, { FC, useMemo } from 'react'
import { Fit, Box } from 'themeor'
import { Spot } from './spot'

export interface BackgroundProps {
  fill?: string
}

export const Background: FC<BackgroundProps> = ({
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