import React from 'react'
import { Font, FontProps, Reaction } from 'themeor'
import { OpiumComponent } from '../../types'


export type LinkProps = FontProps & {
  label?: any
  blank?: boolean
}

export const Link: OpiumComponent<LinkProps> = ({ label, fill, blank, ...rest }) => (
  <Reaction {...rest}>
    {(rProps, r) => (
      <Font.TryTagless
        fill={r.hoverO}
        inline
        {...rProps}
      >
        <a target={blank && '_blank'}>{label}</a>
      </Font.TryTagless>
    )}
  </Reaction>
)

Link.displayName = 'Link'
Link.demoProps = {}