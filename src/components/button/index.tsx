import React from 'react'
import { Align, Fit, Box, Font, Gap, Icon, BoxProps, Reaction } from 'themeor'
import { OpiumComponent } from '../../types'
import { icons } from '../../theme/iconList'
import { MakeButton, MakeButtonProps } from '../make-button'


export type BottonProps = MakeButtonProps & {
  label?: string
  primary?: boolean
  mini?: boolean
  critic?: boolean
  hint?: string
  glow?: boolean
  light?: boolean
  disabled?: boolean
  icon?: string
  inverse?: boolean
  fillHover?: string
  fill?: any
}

export const Button: OpiumComponent<BottonProps> = ({
  label,
  primary,
  disabled,
  mini,
  critic,
  hint,
  glow,
  light,
  children,
  inverse,
  icon,
  fill = disabled ? 'faintUp' : (critic && primary) ? 'critic' : primary ? 'accent' : 'base',
  fillHover = (critic && primary) ? 'criticUp' : primary ? 'accentUp' : 'hovereffect',
  height,
  ...rest
}: BottonProps) => {
  const fillActive = (critic && primary) ? 'criticDown' : primary ? 'accentDown' : 'hovereffect'

  return (
    <MakeButton disabled={disabled} inline fillHover="none" fillActive="none" style={{display: 'block !important'}} {...rest}>
      {(r) => (
        <Box.TryTagless
          glow={glow && 'md'}
          fill={disabled ? 'faintUp' : r.active ? fillActive : r.hoverOrFocus ? fillHover : fill}
          borderFill={(primary || disabled || light) ? "none" : "faintUp"}
          radius="xs"
        >
          <Font.TryTagless
            nowrap
            fill={(disabled && "faintDown") || (critic && "critic") || "base"}
            weight={primary ? "600" : "500"}
            size="sm"
            family="regular"
            inverse={disabled ? false : inverse}
            align={icon ? "left" : "center"}
          >
            <Gap.TryTagless hor="xl">

              <Align
                row
                hor="center"
                vert="center"
                height={height || (mini ? "32px" : "48px")}
                gapHor="8px"
              >
                {icon && (
                  <Icon
                    name={icon}
                    inverse={disabled ? false : inverse}
                    fill={disabled ? "faintDown" : "base"}
                  />
                )}
                <Align>
                  {label}
                  {hint && (<>
                    <Gap size="2px" />
                    <Font
                      inverse={disabled ? false : inverse}
                      lineHeight="xs"
                      size="x2s"
                      fill="faintDown"
                      align={icon ? "left" : "center"}
                      weight="400"
                    >
                      {hint}
                    </Font>
                  </>)}
                </Align>
                {children}
              </Align>

            </Gap.TryTagless>
          </Font.TryTagless>
        </Box.TryTagless>
      )}
    </MakeButton>
  )
}


Button.displayName = 'Button'
Button.description = 'Основная кнопка'
Button.demoProps = {
  Props: {
    _extends: ['MakeButton'],
    label: ['string', `Ooooh, click me, I' a button`],
    icon: ['select', 'airdrop', icons],
    hint: ['string', undefined],
    fillHover: ['string', undefined],
    primary: ['boolean', true],
    mini: ['boolean', false],
    critic: ['boolean', false],
    light: ['boolean', false],
    disabled: ['boolean', false],
  }
}
Button.usage = `<Button {Props}/>`