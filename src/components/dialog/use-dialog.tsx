import React, { useEffect, useRef } from 'react'
import { usePortals } from '../portal'
import { Dialog, DialogProps } from './dialog'


export function useDialog() {
  const { addPortal } = usePortals()

  return ({onApply, onCancel, ...rest}: DialogProps) => new Promise((res) => {
    addPortal(<Dialog
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
