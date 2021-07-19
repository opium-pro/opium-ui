import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import {MakeButton} from '../make-button'

type Props = React.HTMLAttributes<HTMLElement> & {
  label?: string,
  icon?: string,
  active?: boolean,
}

export function Item ({ label, icon, active, ...rest }: Props) {
  return (
    <MakeButton
      offset="0"
      radius="none"
      disabled={active}
      {...rest}
    >
      <Fit.TryTagless width="100%">
        <Gap.TryTagless hor="lg" vert="md">
            <Font
              align="center"
              size="x2s"
              noselect
              fill={active ? "base" : "faint-down"}
            >
              {label}
            </Font>
        </Gap.TryTagless>
      </Fit.TryTagless>
    </MakeButton>
  )
}