import React, { FC } from 'react'
import { Fit, Box } from 'themeor'
import { Spot } from './spot'

export interface IBackground {
  fill?: string
}

export const Background: FC<IBackground> = ({
  children,
  fill = 'faint-down',
  ...rest
}) => {
  return (
    <Fit.TryTagless {...rest}>
      <Box fill={fill}>
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

        <Fit>
          {children}
        </Fit>
      </Box>
    </Fit.TryTagless>
  )
}