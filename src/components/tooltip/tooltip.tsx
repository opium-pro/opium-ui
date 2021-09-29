import React, { FC, useEffect, useRef, useState } from 'react'
import { Font, Box, Gap, Fit, Align } from 'themeor'
import { Portal, usePortals } from '../portal'
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
  delay = 800,
  duration = 150,
  place,
  delayToHide = 100,
  parentNode,
  windowNode,
}) => {
  let { scrollNode } = useAppLayout()
  const targetNode: any = useRef()
  const hovered: any = useRef()
  const timeout: any = useRef()
  const opened: any = useRef()

  if (!windowNode) {
    windowNode = scrollNode || window
  }

  function setInPlace() {
    placeNode(targetNode.current, parentNode, placeOrder, place)
  }

  function handleScroll() {
    handleClose()
    setInPlace()
  }

  function startToOpen() {
    handleOpen()
    windowNode?.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', trackMove)
  }

  function removeMovementTrack() {
    windowNode?.removeEventListener('scroll', handleScroll)
    window.removeEventListener('mousemove', trackMove)
  }

  function trackMove(event) {
    if (parentNode?.contains(event.target) || targetNode.current?.contains(event.target)) {
      !opened.current && handleOpen()
    } else {
      opened.current && handleClose()
    }
  }

  function trackMouseHold() {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(startToOpen, delay)
  }

  function startWaiting() {
    parentNode?.addEventListener('mousemove', trackMouseHold)
    parentNode.addEventListener('click', trackMouseHold)
  }

  function stopWaiting() {
    parentNode?.removeEventListener('mousemove', trackMouseHold)
    parentNode.removeEventListener('click', trackMouseHold)
  }


  function handleOpen(event?: any) {
    if (!targetNode.current) { return }
    hovered.current = true
    hotkeys('esc', 'tooltips', handleClose)
    hotkeys.setScope('tooltips')
    if (opened.current) { return }
    targetNode.current.style.display = 'block'
    setTimeout(() => {
      setInPlace()
      targetNode.current.style.opacity = '1'
      opened.current = true
    }, 100)
  }

  function handleClose(event?: any) {
    if (!targetNode.current) { return }
    hovered.current = false
    if (!opened.current) { return }
    setTimeout(() => {
      if (!hovered.current) {
        targetNode.current.style.opacity = '0'
        setTimeout(() => {
          if (!hovered.current) {
            targetNode.current.style.display = 'none'
            removeTrackers()
            hotkeys.deleteScope('tooltips')
            opened.current = false
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
    clearTimeout(timeout.current)
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
    targetNode.current = node
    setInPlace()
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