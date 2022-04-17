import React, { FC } from 'react'
import { Font, Align, Gap, AlignProps } from 'themeor'


export type HeadCellProps = AlignProps & {
  value?: any
}


export const HeadCell: FC<HeadCellProps> = ({
  value,
  children,
  ...rest
}) => {
  return (
    <th>
      <Align.TryTagless {...rest}>
        <Gap>
          <Font fill="base">{value}</Font>
          {children}
        </Gap>
      </Align.TryTagless>
    </th>
  )
}
