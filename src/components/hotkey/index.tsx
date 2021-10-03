import React, { useEffect } from 'react'
import hotkeys from 'hotkeys-js'
import { AlignProps } from 'themeor'
import { Tag } from '../tag'


export type HotkeyProps = AlignProps & {
  trigger?: string
  action?: () => void
  children?: any
  scope?: string
  active?: boolean
  preventDefault?: boolean
}


export const Hotkey = ({
  scope,
  trigger,
  action,
  active,
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
    if (scope) {
      if (active) {
        hotkeys.setScope(scope)
        bind()
      } else {
        hotkeys.deleteScope(scope)
        unbind()
      }
    }
  }, [active, scope])

  function bind() {
    if (action instanceof Function) {
      hotkeys(trigger, scope, (event) => {
        preventDefault && event.preventDefault()
        action()
      })
    }
  }

  function unbind() {
    hotkeys.unbind(trigger, scope)
  }

  useEffect(() => () => unbind(), [])

  if (children) {
    return children
  }

  const value = mainKeys.join(' + ')
  return <Tag label={value} {...props} />
}
