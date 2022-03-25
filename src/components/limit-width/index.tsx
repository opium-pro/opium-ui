import React from 'react'
import { Fit, Gap, GapProps, Align, AlignProps } from 'themeor'
import { useScreenFit } from '../screen-fit'

type Props = AlignProps & {
  gutter?: any
  scroll?: boolean
  align?: AlignProps['hor']
}

export function LimitWidth({ children, gutter, align = "center", scroll, ...rest }: Props) {
  const screen = useScreenFit()
  const limit = typeof screen?.limit === 'number' ? screen?.limit + 'px' : screen?.limit

  if (!gutter) {
    gutter = screen?.gutter
  }

  return (
    <Align.TryTagless
      hor={align}
      minWidth={limit}
      maxWidth={scroll ? '100%' : limit}
      style={align === 'center' && { margin: "0 auto" }}
      {...rest}
    >
      <Fit scroll={scroll}>
        <Gap width="100%" hor={gutter}>
          {children}
        </Gap>
      </Fit>
    </Align.TryTagless>
  )
}