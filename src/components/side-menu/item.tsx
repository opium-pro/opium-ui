import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import {MakeButton} from '../make-button'

type Props = React.HTMLAttributes<HTMLElement> & {
  label?: string,
  icon?: string,
  active?: boolean,
}

export function Item ({label, active, icon, ...rest}: Props) {
  return (
    <MakeButton offset="0" radius="none" {...rest}>
      <Fit.TryTagless width="100%">
        <Gap.TryTagless hor="xs" vert="md">
          <Align hor="center">
            <Icon
              name={icon || "Placeholder"}
              fill={active ? "complement" : "base"}
            />
            <Gap size="x2s" />
            <Font align="center" size="x2s" noselect>
              {label}
            </Font>
          </Align>
        </Gap.TryTagless>
      </Fit.TryTagless>
    </MakeButton>
  )
}