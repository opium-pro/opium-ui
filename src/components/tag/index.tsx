import React from 'react'
import { Align, FontProps, Box, BoxProps, Font, Gap } from 'themeor'

export type TagProps = FontProps & {
  label?: string,
  type?: BoxProps['fill'],
}

export const Tag = (
  { label, type = 'base', ...props }: TagProps
) => {
  return (
    <Box.TryTagless
      radius="4px"
      fill={type}
      borderFill="faintDown"
      shadow="x3s"
    >
      <Gap.TryTagless vert="3px" hor="6px" bottom="2px">
        <Align.TryTagless row>
          <Font
            fill="faintDown"
            size="9px"
            weight="600"
            uppercase
            {...props}
          >
            {label}
          </Font>
        </Align.TryTagless>
      </Gap.TryTagless>
    </Box.TryTagless>
  )
}