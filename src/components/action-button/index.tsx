import React from 'react'
import { Align, Font, Icon, Gap } from 'themeor'
import { MakeButton } from '../make-button'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  label?: string
  icon?: string
  type?: string
  critic?: boolean
}


export const ActionButton = ({
  label,
  icon,
  disabled,
  critic,
  type = critic ? 'critic' : 'base',
  ...rest
}: Props) => (
  <MakeButton inline {...rest}>
    <Gap.TryTagless left="x2s" right="md">
      <Align row gapHor="sm" vert="center">
        {icon && <Icon fill={type} name={icon} />}
        <Font fill={type}>{label}</Font>
      </Align>
    </Gap.TryTagless>
  </MakeButton>
)