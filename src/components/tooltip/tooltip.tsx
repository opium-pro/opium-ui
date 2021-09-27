import React, { FC, useEffect, useRef, useState } from 'react'
import { Font, Box, Gap, Fit, Align } from 'themeor'
import { Portal, usePortals } from '../portal'
import { useAppLayout } from '../app-layout'
import { placeNode } from '../../utils'
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
  delay = 800,
  duration = 150,
  place,
  delayToHide = 150,
  parentNode,
}) => {
  const { contentNode } = useAppLayout()
  const [opened, setOpened]: any = useState()
  const [targetNode, setTargetNode]: any = useState()

  function setInPlace() {
    placeNode(targetNode, parentNode, place, placeOrder)
  }

  let hovered

  function trackMove(event) {
    if (parentNode?.contains(event.target) || targetNode?.contains(event.target)) {
      hovered = true
      setInPlace()
    } else {
      hovered = undefined
    }
    if (!hovered) {
      handleClose()
    }
  }

  function trackMouseHold(event) {
    let timeout
    setInPlace()
    function handleTimeout() {
      clearTimeout(timeout)
      timeout = setTimeout(handleOpen, delay)
    }
    parentNode.addEventListener('mousemove', handleTimeout)
    parentNode.addEventListener('mouseleave', () => {
      clearTimeout(timeout)
      parentNode.removeEventListener('mousemove', handleTimeout)
    })
  }


  function handleOpen(event?: any) {
    if (!targetNode) { return }
    window.addEventListener('mousemove', trackMove)
    contentNode?.addEventListener('scroll', setInPlace)
    targetNode.style.display = 'block'
    setTimeout(() => {
      setInPlace()
      targetNode.style.opacity = '1'
      !opened && setOpened(true)
    }, 100)
  }

  function handleClose(event?: any) {
    if (!targetNode) { return }
    hovered = false
    window.removeEventListener('mousemove', trackMove)
    contentNode?.removeEventListener('scroll', setInPlace)
    parentNode?.removeEventListener('mouseenter', trackMouseHold)
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
    parentNode.addEventListener('mouseenter', trackMouseHold)
  }

  useEffect(() => () => {
    contentNode?.removeEventListener('scroll', setInPlace)
    parentNode?.removeEventListener('mouseenter', trackMouseHold)
  }, [])

  if (!children) { return null }

  return (
    <Fit forwardRef={handleSourceRef}>
      <Portal>
        <Fit.TryTagless fixed transition="opacity">
          <Gap
            forwardRef={n => n && !targetNode && setTargetNode(n)}
            hidden
            transition={`opacity ${duration}ms`}
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