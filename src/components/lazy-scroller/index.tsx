import React, { FC, useState, Fragment, useEffect, useRef } from 'react'
import { Align, AlignProps } from 'themeor'
import { useAppLayout } from '../app-layout'


export type LazyScrollerProps = AlignProps & {
  onLoad?: any
  preload?: number
  spare?: number
  scrollNode?: any
}


export const LazyScroller: FC<LazyScrollerProps> = ({
  children,
  onLoad,
  preload = 20,
  spare = 5,
  scrollNode,
  ...rest
}) => {
  const chunk = useRef(0)
  const [update, setUpdate] = useState(chunk.current)
  const contentNode: any = useRef()
  const { scrollNode: appScrollNode } = useAppLayout()

  if (!scrollNode) {
    scrollNode = appScrollNode
  }

  async function loadChunk() {
    chunk.current++
    if (typeof onLoad === 'function') {
      await onLoad?.(chunk.current)
    } else {
      setUpdate(chunk.current)
    }
  }

  useEffect(() => {
    if (!scrollNode) { return }
    handleScroll()
    scrollNode.addEventListener('scroll', handleScroll)
    return () => scrollNode.removeEventListener('scroll', handleScroll)
  }, [scrollNode])

  function handleScroll() {
    if (hasToLoad()) {
      loadChunk().then(() => {
        // handleScroll()
      })
    }
  }

  function hasToLoad() {
    const scrolled = scrollNode?.scrollTop
    const scrollHeight = scrollNode?.offsetHeight
    const currentHeight = contentNode?.current?.offsetHeight
    const chunkHeight = (currentHeight / chunk.current) || 0
    const itemHeight = chunkHeight / preload
    return currentHeight - scrolled - scrollHeight <= itemHeight * spare
  }

  const newChildren = React.Children.map(children, (child: any, index) => {
    if (index < preload * chunk.current) {
      return <Fragment key={index}>{child}</Fragment>
    }
  })

  return (
    <Align
      forwardRef={contentNode}
      {...rest}
    >
      {newChildren}
    </Align>
  )
}
