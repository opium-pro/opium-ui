import React, { useEffect, useRef } from 'react'
import { useShadowRender } from '../shadow-render'
import { Dialog } from './dialog'


export function useDialog() {
  const { bunchRemove, addShadow } = useShadowRender()
  const indexList: any = useRef([])

  useEffect(() => () => bunchRemove(indexList), [])

  return (title, text) => new Promise((res) => {
    const render = <Dialog
      title={title}
      text={text}
      onOk={() => res(true)}
      onCancel={() => res(false)}
    />
    const index = addShadow(null, render)
    indexList.current.push(index)
  })
}
