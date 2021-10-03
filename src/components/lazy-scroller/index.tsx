import React, { FC, useState, Fragment, useEffect } from 'react'
import { Fit, Box, Align, Gap } from 'themeor'
import { AppLayoutContext, useAppLayout } from '../app-layout'


export interface LazyScrollerProps {
  onLoad?: any
  preloadLength?: number
  loadAfterPercent?: number
  pattern?: string
  gap?: string
}


export const LazyScroller: FC<LazyScrollerProps> = ({
  children,
  onLoad,
  preloadLength = 50,
  loadAfterPercent = 50,
  gap = "md",
  pattern,
  ...rest
}) => {
  let [chunk, setChunk] = useState(1)
  const [contentNode, setContentNode]: any = useState()
  const { scrollNode } = useAppLayout()
  let fastChunk = chunk

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
      gapHor={gap}
      gapVert={gap}
      forwardRef={setContentNode}
      {...rest}
    >
      {newChildren}
    </Align>
  )
}
