import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'

type Props = React.HTMLAttributes<HTMLElement> & {
  label: string,
  type: string,
} | any

export const Status = ({ label, type, large, ...props }: Props) => {

  const map = {
    done: 'success',
    error: 'critic',
    bank: 'warning',
    client: 'faint',
  }

  return (
    <Box.TryTagless radius="md" fill={map[type]}>
      <Gap vert="x2s" hor="xs">
        <Align {...props} row>
          <Font size={large ? "xs" : "x2s"} weight="500" fill={map[type]}>
            {label}
          </Font>
        </Align>
      </Gap>
    </Box.TryTagless>
  )
}