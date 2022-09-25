import React from 'react'
import { Align, Font, Icon, FontProps, Gap } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button/index.js'
import { OpiumComponent } from '../../types.js'
import { icons } from '../../theme/iconList.js'



export type ActionButtonProps = MakeButtonProps & {
  label?: string
  icon?: string
  fill?: string
  critic?: boolean
  size?: string
  weight?: FontProps['weight']
  col?: boolean
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
  col,
  ...rest
}) => {
  fill = fill || (critic ? 'critic' : 'baseDown')
  return (
    <MakeButton radius={label ? undefined : "max"} inline {...rest}>
      <Align row={!col} vert="center" hor="center">
        {icon && <Icon fill={fill} name={icon} />}
        {icon && label && <Gap size="xs" />}
        {label && <Font size={size} weight={weight} nowrap fill={fill}>
          {label}
          <>{children}</>
        </Font>}
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
    col: ['boolean', false],
    critic: ['boolean', false],
  }
}
ActionButton.usage = `<ActionButton {Props}/>`