import React, { FC, useEffect, useRef, useState } from 'react'
import { Font, Box, Gap, Fit, Align } from 'themeor'
import { Portal, usePortals } from '../portal'
import { useAppLayout } from '../app-layout'
import { fitNode } from '../../utils'
import { Hotkey } from '../hotkey'


export interface TooltipProps {
  parentNode?: any
  delay?: number
  duration?: number
  delayToHide?: number
  placeOrder?: Array<'top' | 'right' | 'bottom' | 'left'>
  place?: 'top' | 'top-right' | 'top-left' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-right' | 'bottom-left' | 'left' | 'left-top' | 'left-bottom'
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  placeOrder = ['top', 'bottom', 'left', 'right'],
  delay = 1500,
  duration = 150,
  place,
  delayToHide = 200,
  parentNode,
}) => {
  const { contentNode } = useAppLayout()
  const [opened, setOpened]: any = useState()
  const [targetNode, setTargetNode]: any = useState()

  function setInPlace() {
    const fits = fitNode(targetNode, parentNode)
    if (!fits) {
      return
    }
    const [canPlace, freeSpace, targetRect, parentRect]: any = fits
    let finalPlace: any = placeOrder[0]

    if (place) {
      finalPlace = place
    } else {
      for (const newPlace of placeOrder) {
        if (canPlace[newPlace.split('-')[0]]) {
          finalPlace = newPlace
          break
        }
      }
    }

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

  let hovered

  function trackMove(event) {
    setInPlace()
    if (parentNode?.contains(event.target) || targetNode?.contains(event.target)) {
      hovered = true
    } else {
      hovered = false
    }
    if (!hovered) {
      handleClose()
    }
  }

  function handleOpen(event?: any) {
    if (!targetNode) {
      setOpened(true)
      return
    }
    window.addEventListener('mousemove', trackMove)
    contentNode?.addEventListener('scroll', setInPlace)
    setTimeout(() => {
      if (hovered) {
        targetNode.style.display = 'block'
        setInPlace()
        setTimeout(() => {
          targetNode.style.opacity = '1'
          !opened && setOpened(true)
        }, 100)
      }
    }, delay)
  }

  function handleClose(event?: any) {
    if (!targetNode) { return }
    hovered = false
    window.removeEventListener('mousemove', trackMove)
    contentNode?.removeEventListener('scroll', setInPlace)
    setTimeout(() => {
      if (!hovered) {
        targetNode.style.opacity = '0'
        setTimeout(() => {
          if (!hovered) {
            targetNode.style.display = 'none'
            opened && setOpened(false)
          }
        }, duration)
      }
    }, delayToHide)
  }

  function handleSourceRef(node) {
    if (!node) { return }
    parentNode = parentNode || node.previousElementSibling
    parentNode.addEventListener('mouseenter', handleOpen)
  }

  useEffect(() => () => {
    contentNode?.removeEventListener('scroll', setInPlace)
    parentNode?.removeEventListener('mouseenter', handleOpen)
  }, [])

  if (!children) { return null }

  return (
    <Fit forwardRef={handleSourceRef}>
      <Portal>
        <Fit.TryTagless fixed transition="opacity">
          <Gap
            forwardRef={n => n && !targetNode && setTargetNode(n)}
            hidden
            opacity="0"
            size="10px"
            onMouseEnter={handleOpen}
          >

            <Box.TryTagless fill="base-down" strong radius="4px">
              <Font.TryTagless>
                <Gap vert="8px" hor="12px">
                  {children}
                  {opened && <Hotkey hidden trigger="esc" action={() => handleClose()} />}
                </Gap>
              </Font.TryTagless>
            </Box.TryTagless>

          </Gap>
        </Fit.TryTagless>
      </Portal>
    </Fit>
  )
}