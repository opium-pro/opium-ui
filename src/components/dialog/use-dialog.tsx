import React, { useEffect, useRef } from 'react'
import { useShadowRender } from '../shadow-render'
import { Dialog } from './dialog'

let id = 1

export function useDialog() {
  const { bunchRemove, addShadow } = useShadowRender()
  const indexList: any = useRef([])

  useEffect(() => () => bunchRemove(indexList), [])

  return (title?: string, text?: string) => new Promise((res) => {
    const render = <Dialog
      title={title}
      text={text}
      onOk={() => res(true)}
      onCancel={() => res(false)}
    />

    const index = addShadow(id++, render)
    indexList.current.push(index)
  })
}
