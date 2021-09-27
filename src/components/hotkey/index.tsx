import React, { useEffect, Fragment } from 'react'
import hotkeys from 'hotkeys-js'
import { Align, Font, Gap } from 'themeor'
import { Tag } from '../tag'


export interface HotkeyProps {
  trigger?: string
  action?: () => void
  children?: any
}


export const Hotkey = ({
  trigger,
  action,
  children,
  ...props
}: HotkeyProps) => {
  const options = trigger.split(',')
  const mainKeys = options[0].split('+')

  useEffect(() => {
    if (action instanceof Function) {
      hotkeys(trigger, (event) => {
        event.preventDefault()
        action()
      })
      return () => hotkeys.unbind(trigger)
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
