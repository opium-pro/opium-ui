import React from 'react'
import { FontProps, Box, BoxProps, Font, Gap, Fit, GapProps } from 'themeor'

export type TagProps = FontProps & BoxProps & GapProps & {
  label?: string,
  fontFill?: FontProps['fill']
}

export const Tag = (
  { label, fontFill = 'faintDown', fill = 'base', ...props }: TagProps
) => {
  return (
    <Fit.TryTagless inline {...props}>
      <Box.TryTagless
        radius="4px"
        fill={fill}
        borderFill="faintDown"
        shadow="x3s"
      >
        <Gap.TryTagless vert="3px" hor="6px" bottom="2px">
          <Font
            fill={fontFill}
            size="9px"
            weight="600"
            uppercase
          >
            {label}
          </Font>
        </Gap.TryTagless>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}