import React from 'react'
import { Align, Fit, Box, Font, Gap, Icon, BoxProps, Reaction } from 'themeor'
import { withTooltip, WithTooltipProps } from '../tooltip'
import { OpiumComponent, Icons } from '../../types'
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
  fill,
  fillHover,
  ...rest
}: BottonProps) => (
  <div>
    <Reaction
      smooth
      track={!disabled && ['hover', 'focus', 'active']}
      cursor={disabled ? 'default' : 'pointer'}
    >
      {(rProps, r) => (
        <Fit.TryTagless inline height={mini ? "32px" : "48px"} stretch={stretch}>
          <Box.TryTagless
            glow={glow && 'md'}
            fill={(disabled && "faintUp")
              || fill && (r.hoverOrFocus ? (fillHover || fill) : fill)
              || (primary && (
                critic && ((r.active && 'criticDown') || (r.hoverOrFocus ? "criticUp" : "critic"))
                || ((r.active && 'accentDown') || (r.hoverOrFocus ? "accentUp" : "accent"))
                || (r.hoverOrFocus && "faint" || light && "none" || "base"))
              )
            }
            borderFill={(primary || disabled || light) ? "none" : "faintUp"}
            radius="xs"
            {...rest}
          >
            <Align.TryTagless row vert="center" hor="center">
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
                    {...rProps}
                    ref={forwardRef}
                    type={type}>
                    <Align hor="center">
                      <Align row vert="center">
                        {icon && (<>
                          <Icon
                            name={icon}
                            inverse={disabled ? false : inverse}
                            fill={disabled ? "faintDown" : "base"}
                          />
                          {label && <Gap size="8px" />}
                        </>)}
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
                    </Align>
                  </button>
                </Gap.TryTagless>
              </Font.TryTagless>
            </Align.TryTagless>
          </Box.TryTagless>
        </Fit.TryTagless>
      )}
    </Reaction>
  </div>
)) as OpiumComponent<BottonProps>


Button.type = 'component'
Button.description = 'Основная кнопка'
Button.demoProps = {
  label: ['string', `Ooooh, click me, I' a button`],
  icon: ['string', 'battery-charge4' as Icons, icons],
  hint: ['string', ''],
  fillHover: ['string', ''],
  primary: ['boolean', true],
  mini: ['boolean', false],
  critic: ['boolean', false],
  light: ['boolean', false],
  disabled: ['boolean', false],
}