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
  children,
  type = critic ? 'critic' : 'base',
  ...rest
}: Props) => (
  <MakeButton inline {...rest}>
    <Gap.TryTagless left="x2s" right="md">
      <Align row gapHor="xs" vert="center">
        {icon && <Icon fill={type} name={icon} />}
        {label && <Font fill={type}>{label}</Font>}
        {children && <Font.TryTagless fill={type}>{children}</Font.TryTagless>}
      </Align>
    </Gap.TryTagless>
  </MakeButton>
)