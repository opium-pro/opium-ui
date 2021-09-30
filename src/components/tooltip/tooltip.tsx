import React, { FC, useEffect, useRef } from 'react'
import { Font, Box, Gap, Fit } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'
import { placeNode } from '../../utils'
import hotkeys from 'hotkeys-js'


export interface TooltipProps {
  parentNode?: any
  delay?: number
  duration?: number
  delayToHide?: number
  windowNode?: any
  placeOrder?: Array<'top' | 'right' | 'bottom' | 'left'>
  place?: 'top' | 'top-right' | 'top-left' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-right' | 'bottom-left' | 'left' | 'left-top' | 'left-bottom'
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  placeOrder = ['top', 'bottom', 'right', 'left'],
  delay = 1000,
  duration = 150,
  place,
  delayToHide = 100,
  parentNode,
  windowNode,
}) => {
  let { scrollNode } = useAppLayout()
  let targetNode
  let hovered
  let timeout
  let opened

  if (!windowNode) {
    windowNode = scrollNode || window
  }

  useEffect(() => {
    if (!parentNode) {
      handleClose()
    }
  })

  function setInPlace() {
    placeNode(targetNode, parentNode, placeOrder, place)
  }

  function handleScroll() {
    handleClose()
    setInPlace()
  }

  function startToOpen() {
    handleOpen()
    setInPlace()
    windowNode?.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', trackMove)
  }

  function removeMovementTrack() {
    windowNode?.removeEventListener('scroll', handleScroll)
    window.removeEventListener('mousemove', trackMove)
  }

  function trackMove(event) {
    if (parentNode?.contains(event.target) || targetNode?.contains(event.target)) {
      !opened && handleOpen()
    } else {
      opened && handleClose()
    }
  }

  function trackMouseHold() {
    clearTimeout(timeout)
    timeout = setTimeout(startToOpen, delay)
  }

  function startWaiting() {
    setInPlace()
    parentNode?.addEventListener('mousemove', trackMouseHold)
    parentNode.addEventListener('click', trackMouseHold)
  }

  function stopWaiting() {
    parentNode?.removeEventListener('mousemove', trackMouseHold)
    parentNode.removeEventListener('click', trackMouseHold)
  }


  function handleOpen(event?: any) {
    if (!targetNode) { return }
    hovered = true
    hotkeys('esc', 'tooltips', handleClose)
    hotkeys.setScope('tooltips')
    if (opened) { return }
    targetNode.style.display = 'block'
    setInPlace()
    setTimeout(() => {
      if (!document.contains(parentNode)) {
        handleClose()
        return
      }
      targetNode.style.opacity = '1'
      opened = true
    }, 100)
  }

  function handleClose(event?: any) {
    if (!targetNode) { return }
    hovered = false
    if (!opened) { return }
    setTimeout(() => {
      if (!hovered) {
        targetNode.style.opacity = '0'
        setTimeout(() => {
          if (!hovered) {
            targetNode.style.display = 'none'
            removeTrackers()
            hotkeys.deleteScope('tooltips')
            opened = false
          }
        }, duration)
      }
    }, delayToHide)
  }

  function removeTrackers() {
    removeMovementTrack()
    stopWaiting()
  }

  function clearMouseHold() {
    clearTimeout(timeout)
  }

  function handleSourceRef(node) {
    if (!node) { return }
    parentNode = parentNode || node.previousElementSibling
    parentNode?.addEventListener('mouseenter', startWaiting)
    parentNode?.addEventListener('mouseleave', clearMouseHold)
  }

  useEffect(() => () => {
    parentNode?.removeEventListener('mouseenter', startWaiting)
    parentNode?.removeEventListener('mouseleave', clearMouseHold)
    removeTrackers()
  }, [])

  function handleTargetRef(node) {
    if (!node) { return }
    targetNode = node
  }

  if (!children) { return null }

  return (
    <Fit forwardRef={handleSourceRef}>
      <Portal>
        <Fit.TryTagless transition="opacity">
          <Gap
            forwardRef={handleTargetRef}
            hidden
            transition={`opacity ${duration}ms`}
            opacity="0"
            size="10px"
          >

            <Box.TryTagless fill="base-down" strong radius="4px">
              <Font.TryTagless>
                <Gap vert="8px" hor="12px">
                  {children}
                </Gap>
              </Font.TryTagless>
            </Box.TryTagless>

          </Gap>
        </Fit.TryTagless>
      </Portal>
    </Fit>
  )
}