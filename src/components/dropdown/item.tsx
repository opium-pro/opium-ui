import React, { FC } from 'react'
import { Font, Box, Align, Fit, Gap, FitProps } from 'themeor'
import { MakeButton } from '../make-button'


export interface ItemProps extends FitProps {}


export const Item: FC<ItemProps> = ({ children, ...rest }) => {
  return (
    <MakeButton offset="0">
      <Gap>
        {children}
      </Gap>
    </MakeButton>
  )
}
