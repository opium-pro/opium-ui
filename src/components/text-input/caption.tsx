import React from 'react'
import { Gap, Font } from 'themeor'
import { useTextInput } from './context'
import { Tooltip } from '../tooltip'


export const Caption = () => {
  const { error } = useTextInput()

  if (typeof error !== 'string') {
    return null
  }

  return <Tooltip delay={0}>{error}</Tooltip>

  return (<>
    <Gap size="xs" />
    <Font fill="critic" size="sm">
      {error}
    </Font>
  </>)
}