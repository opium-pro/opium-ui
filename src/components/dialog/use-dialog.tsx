import React, { useEffect, useRef } from 'react'
import { useShadowRender } from '../shadow-render'
import { Dialog, DialogProps } from './dialog'

let id = 1

export function useDialog() {
  const { bunchRemove, addShadow } = useShadowRender()
  const indexList: any = useRef([])

  useEffect(() => () => bunchRemove(indexList), [])

  return ({onApply, onCancel, ...rest}: DialogProps) => new Promise((res) => {
    const render = <Dialog
      onApply={() => {
        onApply instanceof Function && onApply()
        res(true)
      }}
      onCancel={() => {
        onCancel instanceof Function && onCancel()
        res(false)
      }}
      {...rest}
    />
    const index = addShadow(id++, render)
    indexList.current.push(index)
  })
}
