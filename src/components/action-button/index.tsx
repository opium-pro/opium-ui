import React from 'react'
import { Align, Font, Icon } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button'
import { OpiumComponent, Icons } from '../../types'
import { icons } from '../../theme/iconList'



export type ActionButtonProps = MakeButtonProps & {
  label?: string
  icon?: string
  fill?: string
  critic?: boolean
}


export const ActionButton: OpiumComponent<ActionButtonProps> = ({
  label,
  icon,
  disabled,
  critic,
  children,
  fill,
  ...rest
}) => {
  fill = fill || (critic ? 'critic' : 'baseDown')
  return (
    <MakeButton inline {...rest}>
      <Align row gapHor="xs" vert="center">
        {icon && <Icon fill={fill} name={icon} />}
        {label && <Font nowrap fill={fill}>{label}</Font>}
        {children && <Font.TryTagless fill={fill}>{children}</Font.TryTagless>}
      </Align>
    </MakeButton>
  )
}


ActionButton.displayName = 'ActionButton'
ActionButton.description = 'Кнопка для совершения действия'
ActionButton.demoProps = {
  label: ['string', 'Click me'],
  icon: ['select', 'cross', icons],
  fill: ['string', undefined],
  critic: ['boolean', false],
}
ActionButton.extends = ['MakeButton']