import React, { FC, useState, Fragment, useEffect } from 'react'
import { Align, AlignProps } from 'themeor'
import { useAppLayout } from '../app-layout'


export type LazyScrollerProps = AlignProps & {
  onLoad?: any
  preloadLength?: number
  loadAfterPercent?: number
  scrollNode?: any
}


export const LazyScroller: FC<LazyScrollerProps> = ({
  children,
  onLoad,
  preloadLength = 30,
  loadAfterPercent = 50,
  pattern,
  scrollNode,
  ...rest
}) => {
  let [chunk, setChunk] = useState(1)
  const [contentNode, setContentNode]: any = useState()
  const { scrollNode: appScrollNode } = useAppLayout()
  let fastChunk = chunk

  if (!scrollNode) {
    scrollNode = appScrollNode
  }

  useEffect(() => {
    onLoad && onLoad(chunk)
  }, [chunk])

  function loadChunk() {
    setChunk(++fastChunk)
  }

  useEffect(() => {
    if (!scrollNode) { return }
    scrollNode.addEventListener('scroll', handleScroll)
    return () => scrollNode.removeEventListener('scroll', handleScroll)
  }, [scrollNode, contentNode])


  function handleScroll() {
    const scrolled = scrollNode.scrollTop
    const currentHeight = contentNode?.offsetHeight
    const chunkHeight = currentHeight / fastChunk
    const chunkLoad = chunkHeight * (loadAfterPercent / 100)
    if (scrolled >= currentHeight - chunkHeight + chunkLoad) {
      loadChunk()
    }
  }

  const newChildren = React.Children.map(children, (child: any, index) => {
    if (index <= preloadLength * chunk) {
      return <Fragment key={index}>{child}</Fragment>
    }
  })

  return (
    <Align
      pattern={pattern}
      forwardRef={setContentNode}
      {...rest}
    >
      {newChildren}
    </Align>
  )
}
