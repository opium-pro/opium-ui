import React from 'react'
import { Align, AlignProps, Gap } from 'themeor'


export type Props = AlignProps & {}

export default function ({ children, ...rest }: Props) {
  return (
    <Gap.TryTagless vert="24px">
      <Align row vert="center" gapHor="32px" {...rest}>
        {children}
      </Align>
    </Gap.TryTagless>
  )
}