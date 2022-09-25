import React from 'react'
import { ActionButton, ActionButtonProps } from '../action-button/index.js'
import { OpiumComponent } from '../../types.js'


export type BackButtonProps = ActionButtonProps & {}

export const BackButton: OpiumComponent<BackButtonProps> = (props: BackButtonProps) => {
  return (
    <ActionButton
      fill="faint"
      icon="arrow-left-circle"
      size="xs"
      {...props}
    />
  )
}


BackButton.displayName = 'BackButton'
BackButton.description = 'Кнопка назад'
BackButton.demoProps = {
  Props: {
    _extends: ['ActionButton'],
    label: ['string', 'Back'],
  }
}
BackButton.usage = `<BackButton {Props}/>`