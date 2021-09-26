import React, { FC } from 'react'
import { Gap, FitProps } from 'themeor'
import { MakeButton } from '../make-button'


export interface ItemProps extends FitProps {}


export const Item: FC<ItemProps> = ({ children, ...rest }) => {
  return (
    <MakeButton offset="0" radius="none" {...rest as any}>
      <Gap>
        {children}
      </Gap>
    </MakeButton>
  )
}
