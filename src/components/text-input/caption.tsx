import React from 'react'
import { Gap, Font } from 'themeor'
import { useTextInput } from './context'


export const Caption = () => {
  const { error } = useTextInput()

  if (typeof error !== 'string') {
    return null
  }

  return (<>
    <Gap size="xs" />
    <Font fill="critic" size="sm">
      {error}
    </Font>
  </>)
}