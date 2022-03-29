import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, AlignProps } from 'themeor'
import { MakeButton } from '../make-button'
import { withTooltip } from '../tooltip'


type Props = AlignProps & {
  label?: string
  hint?: string
  forwardRef?: any
  value?: string
  nowrap?: boolean
}

export const Item = withTooltip(({ label, nowrap, onClick, value, forwardRef, hint, children, ...rest }: Props) => {
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