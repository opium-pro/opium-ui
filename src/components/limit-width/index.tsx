import React from 'react'
import { Fit, Gap, GapProps } from 'themeor'
import { useScreenFit } from '../screen-fit'

type Props = GapProps & {
  gutter?: any,
}

export function LimitWidth ({ children, gutter, ...rest }: Props) {
  const screen = useScreenFit()

  if (!gutter) {
    gutter = screen?.gutter
  }

  return (
    <Gap.TryTagless hor={gutter} {...rest}>
      <Fit
        minWidth={screen.limit + 'px'}
        maxWidth={screen.limit + 'px'}
        style={{ margin: "0 auto" }}
      >
        {children}
      </Fit>
    </Gap.TryTagless>
  )
}