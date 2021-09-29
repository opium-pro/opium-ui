import React from 'react'
import { usePortals } from '../portal'
import { Dialog, DialogProps } from './dialog'


export function useDialog() {
  const { openPortal } = usePortals()

  return ({onApply, onCancel, ...rest}: DialogProps) => new Promise((res) => {
    openPortal(<Dialog
      onApply={() => {
        onApply instanceof Function && onApply()
        res(true)
      }}
      onCancel={() => {
        onCancel instanceof Function && onCancel()
        res(false)
      }}
      {...rest}
    />)
  })
}
