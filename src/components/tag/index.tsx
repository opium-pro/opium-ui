import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'

type Props = React.HTMLAttributes<HTMLElement> & {
  label: string,
  type: string,
} | any

export const Tag = ({ label, type = 'base', size='sm', ...props }: Props) => {
  return (
    <Box.TryTagless strong radius="max" fill={type}>
      <Gap vert="x2s" hor="md">
        <Align {...props} row>
          <Font size={size} weight="600">
            {label}
          </Font>
        </Align>
      </Gap>
    </Box.TryTagless>
  )
}