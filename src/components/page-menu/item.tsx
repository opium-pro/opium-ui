import React from 'react'
import { Align, Fit, Font, Gap, Icon, BoxProps } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button/index.js'
import { Counter } from '../counter/index.js'
import { withTooltip, WithTooltip, WithTooltipProps } from '../tooltip/index.js'

export type Props = WithTooltipProps & MakeButtonProps & BoxProps & {
  label?: string,
  icon?: string,
  counter?: number,
  active?: boolean,
}

export const Item: WithTooltip<Props> = withTooltip(({
  label,
  active,
  icon,
  counter,
  children,
  fill,
  ...rest
}: Props) => {
  return (
    <MakeButton
      disabled={active}
      {...rest}
    >
      <Fit.TryTagless width="100%">
        <Align row vert="center" gapHor="xs">
          {icon && <Icon name={icon} fill={active ? 'accent' : 'faintDown'} />}
          <Font
            nowrap
            align="center"
            size="xs"
            noselect
            fill={active ? "accent" : "faintDown"}
            weight={active ? "600" : "500"}
          >
            {label}
          </Font>
          {!!counter && (
            <Counter base={!active} fill={active && 'accent'} value={counter} />
          )}

          {children}
        </Align>
      </Fit.TryTagless>
    </MakeButton>
  )
})