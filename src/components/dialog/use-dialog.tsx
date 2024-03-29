import React from 'react'
import { usePortals } from '../portal/index.js'
import { Dialog, DialogProps } from './dialog.js'


export function useDialog() {
  const { openPortal, closePortal } = usePortals()

  return ({ onApply, onCancel, hold, ...rest }: DialogProps) => new Promise((res) => {
    const portalId = openPortal(<Dialog
      onApply={onApply && (() => {
        onApply instanceof Function && onApply()
        res(true)
      })}
      onCancel={onCancel && (() => {
        onCancel instanceof Function && onCancel()
        res(false)
      })}
      {...rest}
    />)

    if (hold) {
      setTimeout(() => closePortal(portalId), hold)
    }
  })
}
