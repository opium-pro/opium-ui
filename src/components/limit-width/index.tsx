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

  if (!gutter) {
    gutter = screen?.gutter
  }

  return (
    <Align.TryTagless
      hor={align}
      minWidth={screen.limit + 'px'}
      maxWidth={scroll ? '100%' : screen.limit + 'px'}
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