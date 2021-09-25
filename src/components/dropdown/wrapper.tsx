import React, { FC, useState, useEffect, useRef } from 'react'
import { Font, Box, Align, Fit, FitProps } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'
import hotkeys from 'hotkeys-js'


export interface WrapperProps extends FitProps { }


export const Wrapper: FC<WrapperProps> = ({ children, ...rest }) => {
  const [sourceNode, setSourceNode]: any = useState()
  const [targetNode, setTargetNode]: any = useState()
  const [opened, setOpened]: any = useState(true)
  const { contentNode } = useAppLayout()
  const isReady = contentNode && targetNode && sourceNode

  function alignNodes() {
    if (!sourceNode || !targetNode) { return }
    const offsets = sourceNode.getBoundingClientRect()
    targetNode.style.top = offsets.top + 'px'
    targetNode.style.left = offsets.left + 'px'
    targetNode.style.width = offsets.width + 'px'
  }

  useEffect(() => {
    hotkeys('escape', (event) => {
      event.preventDefault()
      setOpened(false)
      alert('adasdasd')
    })
    return () => hotkeys.unbind('escape')
  }, [])

  useEffect(() => {
    alignNodes()
  })

  useEffect(() => {
    if (isReady) {
      contentNode?.addEventListener('scroll', alignNodes)
      window.addEventListener('resize', alignNodes)
      return () => {
        contentNode?.removeEventListener('scroll', alignNodes)
        window.removeEventListener('resize', alignNodes)
      }
    }
  }, [isReady])

  return (
    <Fit
      forwardRef={setSourceNode}
      width="100%"
      top="calc(100% + 10px)"
    >
      <Portal>
        <Fit.TryTagless
          forwardRef={setTargetNode}
          absolute
          scroll
          maxHeight="500px"
          maxWidth="600px"
          minWidth="100px"
          {...rest}
        >
          {opened && (
            <Box radius="md" shadow="lg" fill="base">
              {children}
            </Box>
          )}

        </Fit.TryTagless>
      </Portal>
    </Fit>
  )
}
