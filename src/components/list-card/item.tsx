import React, { FC } from 'react'
import { Font, Align, Gap } from 'themeor'


export interface IItemProps {
  name?: string
  value?: string
}


export const Item: FC<IItemProps> = ({
  name,
  value,
}) => {
  return (
    <Align row>
      <Font fill="faint">{name}</Font>
      :<Gap size="xs" />
      <Font fill="faint">{value}</Font>
    </Align>
  )
}
