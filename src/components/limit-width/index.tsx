import React from 'react'
import { Fit, Gap, GapProps } from 'themeor'
import { useScreenFit } from '../screen-fit'

type Props = GapProps & {
  gutter?: any
  scroll?: boolean
}

export function LimitWidth({ children, gutter, scroll, ...rest }: Props) {
  const screen = useScreenFit()

  if (!gutter) {
    gutter = screen?.gutter
  }

  return (
    <Fit
      minWidth={screen.limit + 'px'}
      maxWidth={scroll ? '100%' : screen.limit + 'px'}
      style={{ margin: "0 auto" }}
      scroll={scroll}
    >
      <Gap hor={gutter} {...rest}>
        {children}
      </Gap>
    </Fit>
  )
}