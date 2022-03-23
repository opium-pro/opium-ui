import React from 'react'
import { Align, Fit, Box, Font, Gap, BoxProps } from 'themeor'

const SIZES = {
  default: {
    size: '20px',
    font: 'x3s',
  },
  lg: {
    size: '30px',
    font: 'md',
  }
}

type Props = Omit<BoxProps, 'size'> & {
  value: string | number,
  attention?: boolean,
  base?: boolean,
  size?: keyof typeof SIZES,
}

export const Counter = ({ value, attention, base, size = 'default', ...rest }: Props) => (
  <Fit inline>
    <Fit inline>
      <Gap.TryTagless hor="6px" minWidth={SIZES[size].size} height={SIZES[size].size}>
        <Box.TryTagless
          radius="max"
          fill={(base && 'base') || (attention ? "base" : "faint")}
          strong={attention}
          shadow={!!base ? 'sm' : 'none'}
          {...rest}
        >
          <Align.TryTagless vert="center" hor="center">
            <Font
              size={SIZES[size].font}
              weight="700"
              fill={(attention || base) ? "base" : "faint"}
            >
              {value}
            </Font>
          </Align.TryTagless>
        </Box.TryTagless>
      </Gap.TryTagless>
    </Fit>
  </Fit>
)