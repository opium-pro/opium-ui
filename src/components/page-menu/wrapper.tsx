import React from 'react'
import { Align, Fit, Gap } from 'themeor'


import { LimitWidth } from '../limit-width'

export type Props = React.HTMLAttributes<HTMLElement> & {}

export default function ({ children, ...rest }: Props) {
  return (
    <Fit scroll {...rest}>
      <Gap />
      <LimitWidth>
        <Align row vert="center" gapHor="xl">
          {children}
        </Align>
      </LimitWidth>
      <Gap />
    </Fit>
  )
}