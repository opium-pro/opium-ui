import React, { FC } from 'react'
import { Font, Align, Gap, AlignProps } from 'themeor'


export type CellProps = AlignProps & {
  value1?: any
  value2?: any
}


export const Cell: FC<CellProps> = ({
  value1,
  value2,
  ...rest
}) => {
  return (
    <td>
      <Align.TryTagless {...rest}>
        <Gap>
          <Font fill="faint">{value1}</Font>
          <Gap size="xs" />
          <Font fill="faint">{value2}</Font>
        </Gap>
      </Align.TryTagless>
    </td>
  )
}
