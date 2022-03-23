import React from 'react'
import { Align, Font, Icon } from 'themeor'
import { MakeButton } from '../make-button'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  label?: string
  icon?: string
  fill?: string
  critic?: boolean
}


export const ActionButton = ({
  label,
  icon,
  disabled,
  critic,
  children,
  fill = critic ? 'critic' : 'base-down',
  ...rest
}: Props) => (
  <MakeButton inline {...rest}>
    <Align row gapHor="xs" vert="center">
      {icon && <Icon fill={fill} name={icon} />}
      {label && <Font nowrap fill={fill}>{label}</Font>}
      {children && <Font.TryTagless fill={fill}>{children}</Font.TryTagless>}
    </Align>
  </MakeButton>
)