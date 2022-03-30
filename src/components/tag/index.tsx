import React from 'react'
import { Align, FontProps, Box, BoxProps, Font, Gap, Fit } from 'themeor'

export type TagProps = FontProps & {
  label?: string,
  fill?: BoxProps['fill'],
}

export const Tag = (
  { label, fill = 'base', ...props }: TagProps
) => {
  return (
    <Fit.TryTagless inline>
      <Box.TryTagless
        radius="4px"
        fill={fill}
        borderFill="faintDown"
        shadow="x3s"
      >
        <Gap.TryTagless vert="3px" hor="6px" bottom="2px">
          <Font
            fill="faintDown"
            size="9px"
            weight="600"
            uppercase
            {...props}
          >
            {label}
          </Font>
        </Gap.TryTagless>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}