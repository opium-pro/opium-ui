import React from 'react'
import { ActionButton, ActionButtonProps } from '../action-button'
import { OpiumComponent } from '../../types'


export type BackButtonProps = ActionButtonProps & {}

export const BackButton: OpiumComponent<BackButtonProps> = (props: BackButtonProps) => {
  return (
    <ActionButton fill="faint" icon="arrow-left-circle" {...props} />
  )
}


BackButton.displayName = 'BackButton'
BackButton.description = 'Кнопка назад'
BackButton.demoProps = {
  label: ['string', 'Back'],
}
BackButton.extends = ['ActionButton']