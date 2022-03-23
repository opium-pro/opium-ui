import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import { MakeButton } from '../make-button'
import { Counter } from '../counter'
import { withTooltip } from '../tooltip'

export type Props = React.HTMLAttributes<HTMLElement> & {
  label?: string,
  icon?: string,
  counter?: number,
  active?: boolean,
  link?: string,
  forwardRef?: any
}

export const Item = withTooltip(({
  label,
  active,
  icon,
  counter,
  link,
  children,
  forwardRef,
  ...rest
}: Props) => {
  return (
    <MakeButton
      disabled={active}
      forwardRef={forwardRef}
      {...rest}
    >
      <Fit.TryTagless width="100%" height="42px">
        <Align row vert="center">
          <Font
            nowrap
            align="center"
            size="xs"
            noselect
            fill={active ? "base" : "faint-down"}
            weight={active ? "600" : "500"}
          >
            {label}
          </Font>
          {!!counter && (<>
            <Gap size="xs" />
            <Counter attention value={counter} />
          </>)}

          {children}
        </Align>
      </Fit.TryTagless>
    </MakeButton>
  )
})