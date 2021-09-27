import React, { FC, useEffect, useRef, useState } from 'react'
import { Font, Box, Gap, Fit, Align } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'


export interface TooltipProps {
  parentNode?: any
  delay?: number
  placeOrder?: Array<'top' | 'right' | 'bottom' | 'left'>
  place?: 'top' | 'top-right' | 'top-left' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-right' | 'bottom-left' | 'left' | 'left-top' | 'left-bottom'
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  placeOrder = ['top', 'bottom', 'left', 'right'],
  delay = 1000,
  place,
  parentNode: initialParent,
}) => {
  const { contentNode } = useAppLayout()
  const [targetNode, setTargetNode]: any = useState()
  const [sourceNode, setSourceNode]: any = useState()
  const [parentNode, setParentNode]: any = useState(initialParent)
  const [opened, setOpened]: any = useState(false)

  const isReady = parentNode && targetNode && sourceNode

  useEffect(() => {
    if (!initialParent && sourceNode) {
      setParentNode(sourceNode.parentNode)
    } else {
      setParentNode(initialParent)
    }
  }, [initialParent, sourceNode])


  function getPlace(parentRect, targetRect) {
    const freeSpace = {
      top: parentRect.top,
      left: parentRect.left,
      right: window.innerWidth - parentRect.left - parentRect.width,
      bottom: window.innerHeight - parentRect.top - parentRect.height,
    }
    const canPlace = {
      top: freeSpace.top > targetRect.height,
      left: freeSpace.left > targetRect.width,
      right: freeSpace.right > targetRect.width,
      bottom: freeSpace.bottom > targetRect.height,
    }

    if (place) { return [place, freeSpace] }

    for (const newPlace of placeOrder) {
      if (canPlace[newPlace.split('-')[0]]) {
        return [newPlace, freeSpace]
      }
    }

    return [placeOrder[0], freeSpace]
  }


  function setPlace() {
    if (!targetNode || !parentNode) { return }
    const parentRect = parentNode?.getBoundingClientRect()
    const targetRect = targetNode?.getBoundingClientRect()
    const [finalPlace, freeSpace]: any = getPlace(parentRect, targetRect)
    const firstPlace = finalPlace?.split('-')[0]
    let secondPlace = finalPlace?.split('-')[1]

    const topValue = {
      top: freeSpace.top - targetRect.height,
      left: freeSpace.top,
      right: freeSpace.top,
      bottom: parentRect.top + parentRect.height,
    }
    const leftValue = {
      top: freeSpace.left,
      left: freeSpace.left - targetRect.width,
      right: parentRect.left + parentRect.width,
      bottom: freeSpace.left,
    }
    if (['top', 'bottom'].includes(firstPlace)) {
      targetNode.style.top = topValue[firstPlace] + 'px'
    }
    if (['left', 'right'].includes(firstPlace)) {
      targetNode.style.left = leftValue[firstPlace] + 'px'
    }

    if (!secondPlace) {
      ['top', 'bottom'].includes(firstPlace) && (secondPlace = 'horCenter');
      ['right', 'left'].includes(firstPlace) && (secondPlace = 'vertCenter');
    }

    const topSecondValue = {
      top: freeSpace.top,
      vertCenter: parentRect.top + (parentRect.height / 2) - (targetRect.height / 2),
      bottom: parentRect.top + parentRect.height - targetRect.height,
    }
    const leftSecondValue = {
      left: freeSpace.left,
      horCenter: parentRect.left + (parentRect.width / 2) - (targetRect.width / 2),
      right: freeSpace.left + parentRect.width - targetRect.width,
    }

    if (['top', 'bottom', 'vertCenter'].includes(secondPlace)) {
      targetNode.style.top = topSecondValue[secondPlace] + 'px'
    }
    if (['right', 'left', 'horCenter'].includes(secondPlace)) {
      targetNode.style.left = leftSecondValue[secondPlace] + 'px'
    }
  }

  if (isReady) {
    setPlace()
  }

  function handleClose() {
    setOpened(false)
  }

  function handleOpen(newDelay = delay) {
    setTimeout(() => setOpened(true), newDelay)
  }

  useEffect(() => {
    if (opened) {
      contentNode?.addEventListener('scroll', handleClose)
    } else {
      contentNode?.removeEventListener('scroll', handleClose)
    }
  }, [opened])


  useEffect(() => {
    if (parentNode) {
      parentNode.addEventListener('mouseenter', handleOpen)
      parentNode.addEventListener('mouseleave', handleClose)
    }
  }, [parentNode])


  return (
    <Fit forwardRef={setSourceNode}>
      <Portal>
        <Fit
          cover="screen"
          left="0"
          top="0"
          pointerEvents="none"
          opacity={opened ? '1' : '0'}
          transition
        >
          {opened && (
            <Fit.TryTagless
              onMouseEnter={() => handleOpen(0)}
              onMouseLeave={handleClose}
              inline
              absolute
              pointerEvents="all"
            >
              <Gap forwardRef={setTargetNode} size="10px">
                <Box.TryTagless fill="base-down" strong radius="4px">
                  <Font.TryTagless>
                    <Gap vert="8px" hor="12px">
                      {children}
                    </Gap>
                  </Font.TryTagless>
                </Box.TryTagless>
              </Gap>
            </Fit.TryTagless>
          )}
        </Fit>
      </Portal>
    </Fit>
  )
}