import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button'
import { OpiumComponent } from '../../types'


export type BackButtonProps = MakeButtonProps & {}

export const BackButton: OpiumComponent<BackButtonProps> = (props: BackButtonProps) => {
  return (
    <MakeButton radius="max" {...props}>
      <Align row vert="center" gapHor="md">
        <Icon name="Placeholder" />
      </Align>
    </MakeButton>
  )
}

BackButton.type = 'component'
BackButton.description = 'Кнопка назад'
BackButton.demoProps = {}