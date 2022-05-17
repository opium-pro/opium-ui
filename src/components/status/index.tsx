import React, { FC } from 'react'
import { Align, Box, Font, Gap, FontProps } from 'themeor'

export type StatusProps = FontProps & {
  label: string,
  fill?: string,
  size?: string,
}

export const Status: FC<StatusProps> = ({ label, type = 'base', ...props }) => {
  if (!label) { return null }
  return (
    <Box.TryTagless inverse={['base, faint'].includes(type)} radius="max" fill={type}>
      <Gap.TryTagless vert="x2s" hor="md">
        <Align.TryTagless row>
          <Font size="sm" weight="600" {...props}>
            {label}
          </Font>
        </Align.TryTagless>
      </Gap.TryTagless>
    </Box.TryTagless>
  )
}