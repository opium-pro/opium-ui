import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  label?: string,
  primary?: boolean,
  type?: string,
  mini?: boolean,
  critic?: boolean,
}

export const Button = ({
  label,
  primary,
  type = "button",
  disabled,
  mini,
  critic,
  ...rest
}: Props) => (
  <Reaction
    smooth
    track={!disabled && ['hover', 'focus', 'active']}
    cursor={disabled ? 'default' : 'pointer'}
  >
    {(rProps, r) => (
      <div>
        <Fit.TryTagless inline height={mini ? "32px" : "48px"}>
          <Box.TryTagless
            fill={(disabled && "faint-up") || (primary ? ((r.active && 'accent-up') || (r.hoverOrFocus ? "accent-down" : "accent")) : (r.hoverOrFocus ? "faint" : "none"))}
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
      </div>
    )}
  </Reaction>
)