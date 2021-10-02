import React, { FC } from 'react'
import { Gap, Align, FitProps } from 'themeor'
import { MakeButton } from '../make-button'


export interface ItemProps extends FitProps {}


export const Item: FC<ItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <MakeButton
      offset="0"
      radius="none"
      tabIndex={0}
      {...rest as any}
    >
      <Gap.TryTagless vert="4px" hor="16px" minHeight="40px">
        <Align vert="center">
          {children}
        </Align>
      </Gap.TryTagless>
    </MakeButton>
  )
}
