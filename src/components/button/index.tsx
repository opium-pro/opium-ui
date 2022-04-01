import React from 'react'
import { Align, Fit, Box, Font, Gap, Icon, BoxProps, Reaction } from 'themeor'
import { withTooltip, WithTooltipProps } from '../tooltip'
import { OpiumComponent } from '../../types'
import { icons } from '../../theme/iconList'


export type BottonProps = WithTooltipProps & BoxProps & {
  label?: string
  primary?: boolean
  type?: string
  mini?: boolean
  critic?: boolean
  hint?: string
  stretch?: boolean
  glow?: boolean
  light?: boolean
  forwardRef?: any
  disabled?: boolean
  icon?: string
  inverse?: boolean
  fillHover?: string
}

export const Button = withTooltip(({
  label,
  primary,
  type = "button",
  disabled,
  mini,
  critic,
  hint,
  stretch,
  glow,
  light,
  children,
  forwardRef,
  inverse,
  icon,
  fill = disabled ? 'faintUp' : (critic && primary) ? 'critic' : primary ? 'accent' : 'base',
  fillHover = (critic && primary) ? 'criticUp' : primary ? 'accentUp' : 'hovereffect',
  height,
  ...rest
}: BottonProps) => {
  const fillActive = (critic && primary) ? 'criticDown' : primary ? 'accentDown' : 'hovereffect'

  return (
    <Reaction
      smooth
      track={!disabled && ['hover', 'focus', 'active']}
      cursor={disabled ? 'default' : 'pointer'}
    >
      {(rProps, r) => (
        <Fit.TryTagless inline stretch={stretch}>
          <Box.TryTagless
            glow={glow && 'md'}
            fill={r.active ? fillActive : r.hoverOrFocus ? fillHover : fill}
            borderFill={(primary || disabled || light) ? "none" : "faintUp"}
            radius="xs"
            {...rest}
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
                <button
                  disabled={disabled}
                  ref={forwardRef}
                  type={type as any}
                  {...rProps}
                >
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
                </button>
              </Gap.TryTagless>
            </Font.TryTagless>
          </Box.TryTagless>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}) as OpiumComponent<BottonProps>


Button.displayName = 'Button'
Button.description = 'Основная кнопка'
Button.demoProps = {
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