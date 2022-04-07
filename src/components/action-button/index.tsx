import React from 'react'
import { Align, Font, Icon, FontProps } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button'
import { OpiumComponent } from '../../types'
import { icons } from '../../theme/iconList'



export type ActionButtonProps = MakeButtonProps & {
  label?: string
  icon?: string
  fill?: string
  critic?: boolean
  size?: string
  weight?: FontProps['weight']
}


export const ActionButton: OpiumComponent<ActionButtonProps> = ({
  label,
  icon,
  disabled,
  critic,
  children,
  fill,
  size = "md",
  weight = "500",
  ...rest
}) => {
  fill = fill || (critic ? 'critic' : 'baseDown')
  return (
    <MakeButton inline {...rest}>
      <Align row gapHor="xs" vert="center">
        {icon && <Icon fill={fill} name={icon} />}
        {label && <Font size={size} weight={weight} nowrap fill={fill}>{label}{children}</Font>}
      </Align>
    </MakeButton>
  )
}


ActionButton.displayName = 'ActionButton'
ActionButton.description = 'Кнопка для совершения действия'
ActionButton.demoProps = {
  Props: {
    _extends: ['MakeButton'],
    label: ['string', 'Click me'],
    icon: ['select', 'cross', icons],
    fill: ['string', undefined],
    critic: ['boolean', false],
  }
}
ActionButton.usage = `<ActionButton {Props}/>`