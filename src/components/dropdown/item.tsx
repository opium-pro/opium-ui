import React, { FC } from 'react'
import { Gap, Align, FitProps } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button/index.js'


export type ItemProps = MakeButtonProps & FitProps & {
  label?: any
}


export const Item: FC<ItemProps> = ({
  children,
  label,
  ...rest
}) => {
  return (
    <MakeButton
      offset="0"
      radius="none"
      {...rest as any}
    >
      <Gap.TryTagless vert="4px" hor="16px" minHeight="40px">
        <Align vert="center">
          {label}
          {children}
        </Align>
      </Gap.TryTagless>
    </MakeButton>
  )
}
