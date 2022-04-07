import React from 'react'
import { Align, Fit, Font, Gap, Icon } from 'themeor'
import { MakeButton } from '../make-button'
import { Counter } from '../counter'
import { withTooltip } from '../tooltip'

export type Props = React.HTMLAttributes<HTMLElement> & {
  label?: string,
  icon?: string,
  counter?: number,
  active?: boolean,
}

export const Item = withTooltip(({
  label,
  active,
  icon,
  counter,
  children,
  ...rest
}: Props) => {
  return (
    <MakeButton
      disabled={active}
      offset="16px 24px"
      {...rest}
    >
      <Fit.TryTagless width="100%">
        <Align row vert="center" gapHor="xs">
          {icon && <Icon name={icon} fill={active ? 'base' : 'faintDown'} />}
          <Font
            nowrap
            align="center"
            size="xs"
            noselect
            fill={active ? "base" : "faintDown"}
            weight={active ? "600" : "500"}
          >
            {label}
          </Font>
          {!!counter && (
            <Counter attention value={counter} />
          )}

          {children}
        </Align>
      </Fit.TryTagless>
    </MakeButton>
  )
})