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

  return (
    <Align row vert="center" {...props}>
      {mainKeys.map((label, index) => (
        <Fragment key={`hotkey-${trigger}-${label}`}>
          <Tag label={label} />
          {index + 1 < mainKeys.length && (
            <Gap hor="x3s">
              <Font fill="faint-down" weight="600">+</Font>
            </Gap>
          )}
        </Fragment>
      ))}
    </Align>
  )
}
