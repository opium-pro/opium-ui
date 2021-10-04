import React, { useEffect } from 'react'
import hotkeys from 'hotkeys-js'
import { AlignProps } from 'themeor'
import { Tag } from '../tag'


export type HotkeyProps = AlignProps & {
  trigger?: string
  action?: (event?: any) => void
  children?: any
  scope?: string
  active?: boolean
  preventDefault?: boolean
}


export const Hotkey = ({
  scope,
  trigger,
  action,
  active = true,
  children,
  preventDefault = false,
  ...props
}: HotkeyProps) => {
  const options = trigger.split(',')
  const mainKeys = options[0].split('+')

  useEffect(() => {
    hotkeys.filter = function (event) {
      return true
    }
  }, [])

  useEffect(() => {
    bind()
  }, [active, scope])

  function bind() {
    if (action instanceof Function) {
      if (scope) {
        hotkeys.setScope(scope)
        hotkeys(trigger, scope, finalAction)
      } else {
        hotkeys.setScope('all')
        hotkeys(trigger, finalAction)
      }
    }
  }

  function finalAction(event) {
    preventDefault && event.preventDefault()
    action(event)
  }

  function unbind() {
    hotkeys.unbind(trigger, scope)
    hotkeys.setScope('all')
  }

  useEffect(() => () => unbind(), [])

  if (children) {
    return children
  }

  const value = mainKeys.join(' + ')
  return <Tag label={value} {...props} />
}
