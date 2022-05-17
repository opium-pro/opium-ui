import React, { FC, useState, Fragment, useEffect, useRef } from 'react'
import { Align, AlignProps } from 'themeor'
import { useAppLayout } from '../app-layout'


export type LazyScrollerProps<TagProps = {[key: string]: any}> = {
  onLoad?: any
  preload?: number
  spare?: number
  scrollNode?: any
  Tag?: any
} & TagProps


export const LazyScroller: FC<LazyScrollerProps> = ({
  children,
  onLoad,
  preload = 10,
  spare = 5,
  scrollNode,
  Tag = Align,
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

  const newChildren = React.Children.toArray(children).slice(0, preload * chunk.current).map((child, index) => (
    <Fragment key={index}>{child}</Fragment>
  ))

  return (
    <Tag
      ref={contentNode}
      {...rest}
    >
      {newChildren}
    </Tag>
  )
}
