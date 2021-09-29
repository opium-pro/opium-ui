import React, { FC, useState, useEffect } from 'react'
import { Box, Fit, FitProps, Gap } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'
import { placeNode } from '../../utils'


export interface DropdownProps extends FitProps {
  place?: string
  placeOrder?: string[]
}


export const Dropdown: FC<DropdownProps> = ({ children, place, placeOrder, forwardRef, ...rest }) => {
  const [sourceNode, setSourceNode]: any = useState()
  const [targetNode, setTargetNode]: any = useState()
  const [isReady, setIsReady]: any = useState()
  const { contentNode } = useAppLayout()

  function alignNodes() {
    if (!sourceNode || !targetNode) { return }
    placeNode(targetNode, sourceNode, placeOrder, place)
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

  useEffect(() => {
    alignNodes()
    if (contentNode && targetNode && sourceNode) {
      setIsReady(true)
    }
  })

  return (
    <Fit forwardRef={setSourceNode}>
      <Portal>
        <Fit absolute left="0" top="0">
          <Gap
            vert="10px"
            forwardRef={handleRef}
            {...rest}
          >
            <Fit.TryTagless
              scroll
              maxHeight="500px"
              maxWidth="600px"
              minWidth="100px"
            >
              <Box radius="md" shadow="lg" fill="base">
                {children}
              </Box>
            </Fit.TryTagless>
          </Gap>
        </Fit>
      </Portal>
    </Fit>
  )
}
