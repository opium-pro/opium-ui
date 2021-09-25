import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'

export type BottonProps = React.AllHTMLAttributes<HTMLElement> & {
  label?: string
  primary?: boolean
  type?: string
  mini?: boolean
  critic?: boolean
  hint?: string
  stretch?: boolean
  glow?: boolean
  light?: boolean
}

export const Button = ({
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
  ...rest
}: BottonProps) => (
  <Reaction
    smooth
    track={!disabled && ['hover', 'focus', 'active']}
    cursor={disabled ? 'default' : 'pointer'}
  >
    {(rProps, r) => (
      <Fit.TryTagless inline height={mini ? "32px" : "48px"} stretch={stretch}>
        <Box.TryTagless
          glow={glow && 'md'}
          fill={(disabled && "faint-up") || (primary ? ((r.active && 'accent-up') || (r.hoverOrFocus ? "accent-down" : "accent")) : (r.hoverOrFocus && "faint" || light && "none" || "base"))}
          borderFill={(primary || disabled) ? "none" : "faint-up"}
          strong={primary && !disabled}
          radius="xs"
        >
          <Align.TryTagless vert="center" hor="center">
            <Font.TryTagless
              nowrap
              fill={(disabled && "faint-down") || (critic && "critic") || "base"}
              weight={primary ? "600" : "500"}
              size="sm"
              family="regular"
            >
              <Gap.TryTagless hor="xl">
                <button disabled={disabled} {...rProps} {...rest} type={type}>{label}</button>
              </Gap.TryTagless>
            </Font.TryTagless>
          </Align.TryTagless>
        </Box.TryTagless>
      </Fit.TryTagless>
    )}
  </Reaction>
)