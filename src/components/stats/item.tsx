import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, AlignProps } from 'themeor'
import { MakeButton } from '../make-button/index.js'
import { withTooltip, WithTooltipProps, WithTooltip } from '../tooltip/index.js'


export type Props = WithTooltipProps & AlignProps & {
  label?: any
  hint?: any
  forwardRef?: any
  value?: any
  nowrap?: boolean
}

export const Item: WithTooltip<Props> = withTooltip(({
  label,
  nowrap,
  onClick,
  value,
  forwardRef,
  hint,
  children,
  ...rest
}: Props) => {
  return (
    <MakeButton
      forwardRef={forwardRef}
      offset="0"
      radius="none"
      disabled={!onClick}
    >
      <Gap.TryTagless vert="md" hor="xl">
        <Align {...rest}>
          <Font
            size="x2s"
            transition
            noselect
            weight={'500'}
            fill={"base"}
            nowrap={nowrap}
          >
            {label}
          </Font>

          <Font
            size="xl"
            transition
            noselect
            weight={'700'}
            fill={"base"}
            nowrap={nowrap}
          >
            {value}
          </Font>

          {hint && (<>
            <Font
              size="x3s"
              noselect
              fill="faintDown"
            >
              {hint}
            </Font>
          </>)}

          {children}

        </Align>
      </Gap.TryTagless>
    </MakeButton>
  )
}, { place: 'top' })