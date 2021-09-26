import React, { FC, useState, useEffect, useRef } from 'react'
import { Font, Box, Align, Fit, FitProps, Animate } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'


export interface DropdownProps extends FitProps { }


export const Dropdown: FC<DropdownProps> = ({ children, forwardRef, ...rest }) => {
  const [sourceNode, setSourceNode]: any = useState()
  const [targetNode, setTargetNode]: any = useState()
  const { contentNode } = useAppLayout()
  const isReady = contentNode && targetNode && sourceNode

  function alignNodes() {
    if (!sourceNode || !targetNode) { return }
    const offsets = sourceNode.getBoundingClientRect()
    targetNode.style.top = offsets.top + 12 + 'px'
    targetNode.style.left = offsets.left + 'px'
    targetNode.style.width = offsets.width + 'px'
  }

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

  function handleRef(node) {
    if (!node) { return }
    !targetNode && setTargetNode(node)
      ; (forwardRef as any)?.(node)
  }

  return (
    <Fit forwardRef={n => n && !sourceNode && setSourceNode(n)}>
      <Portal>
        <Fit.TryTagless
          forwardRef={handleRef}
          absolute
          scroll
          maxHeight="500px"
          maxWidth="600px"
          minWidth="100px"
          {...rest}
        >
          <Box radius="md" shadow="lg" fill="base">
            {children}
          </Box>
        </Fit.TryTagless>
      </Portal>
    </Fit>
  )
}
