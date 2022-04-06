import React, { useEffect } from 'react'
import hotkey from 'hotkeys-js'
import { Tag, TagProps } from '../tag'


export type HotkeyProps = TagProps & {
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
    hotkey.filter = function (event) {
      return true
    }
  }, [])

  useEffect(() => {
    bind()
  }, [active, scope])

  function bind() {
    if (action instanceof Function) {
      if (scope) {
        hotkey.setScope(scope)
        hotkey(trigger, scope, finalAction)
      } else {
        hotkey.setScope('all')
        hotkey(trigger, finalAction)
      }
    }
  }

  function finalAction(event) {
    preventDefault && event.preventDefault()
    action(event)
  }

  function unbind() {
    hotkey.unbind(trigger, scope)
    hotkey.setScope('all')
  }

  useEffect(() => () => unbind(), [])

  if (children) {
    return children
  }

  const value = mainKeys.join(' + ')
  return <Tag label={value} {...props} />
}

export { hotkey }