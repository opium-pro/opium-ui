import React, { useEffect, Fragment } from 'react'
import hotkeys from 'hotkeys-js'
import { Align, AlignProps, Font, Gap } from 'themeor'
import { Tag } from '../tag'


export type HotkeyProps = AlignProps & {
  trigger?: string
  action?: () => void
  children?: any
  scope?: string
}


export const Hotkey = ({
  scope,
  trigger,
  action,
  children,
  ...props
}: HotkeyProps) => {
  const options = trigger.split(',')
  const mainKeys = options[0].split('+')

  useEffect(() => {
    if (action instanceof Function) {
      hotkeys(trigger, scope, (event) => {
        event.preventDefault()
        action()
      })
      return () => hotkeys.unbind(trigger, scope)
    }
  })

  if (children) {
    return children
  }

  const value = mainKeys.join(' + ')

  return <Tag label={value} {...props} />
}
