import React, { FC } from 'react'
import { Align, Font, Gap, Icon } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button'

export type ItemProps = MakeButtonProps & {
  label?: string
  icon?: string
  active?: boolean
  fill?: string
}

export const Item: FC<ItemProps> = ({
  label,
  icon,
  active,
  fill,
  ...rest
}: ItemProps) => {
  const finalFill = fill || (active ? 'base' : 'faintDown')

  return (
    <MakeButton
      offset="0"
      radius="none"
      disabled={active}
      {...rest}
    >
      <Gap hor="lg" vert="md" width="100%">
        <Align row gapHor="xs" vert="center">
          {icon && <Icon name={icon} fill={finalFill} />}
          <Font
            align="center"
            size="x2s"
            noselect
            fill={finalFill}
          >
            {label}
          </Font>
        </Align>
      </Gap>
    </MakeButton>
  )
}