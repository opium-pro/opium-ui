import React from 'react'
import { Font, FontProps, Align, Icon } from 'themeor'
import { OpiumComponent } from '../../types'
import { icons } from '../../theme/iconList'
import { MakeButton, MakeButtonProps } from '../make-button'


export type LinkProps = MakeButtonProps & FontProps & {
  label?: any
  icon?: string
  fillHover?: string
}

export const Link: OpiumComponent<LinkProps> = ({
  label,
  fill = 'base',
  fillHover = 'accent',
  icon,
  children,
  ...rest
}) => (
  <MakeButton
    inline
    fillHover="none"
    fillActive="none"
    {...rest}
  >
    {(r) => (
      <Font.TryTagless
        fill={r.hoverOrFocus ? fillHover : fill}
        {...r.restProps}
      >
          <Align row gapHor="4px" vert="center">
            {label}
            {icon && <Icon size="sm" fill={r.hoverOrFocus ? fillHover : fill} name={icon} />}
            {children}
          </Align>
      </Font.TryTagless>
    )}
  </MakeButton>
)

Link.displayName = 'Link'
Link.demoProps = {}