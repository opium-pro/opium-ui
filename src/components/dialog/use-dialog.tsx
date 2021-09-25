import React from 'react'
import { useAppContext } from '../../context'
import { Dialog } from './dialog'

let id = 0

export function useDialog() {
  const { portal, setPortal } = useAppContext()

  return (title, text) => new Promise((res) => {
    const modal = <Dialog
      key={`dialog-${id++}`}
      title={title}
      text={text}
      onOk={() => res(true)}
      onCancel={() => res(false)}
    />
    setPortal([...portal, modal])
  })
}
