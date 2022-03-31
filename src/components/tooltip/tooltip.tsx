import React, { FC, useEffect } from 'react'
import { Font, Box, Gap, Fit, BoxProps } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'
import { placeNode } from '../../utils'
import hotkeys from 'hotkeys-js'
import { tooltipConfig } from './config'
import { OpiumComponent } from '../../types'


export type TooltipProps = Omit<BoxProps, 'delay'> & {
  parentNode?: HTMLElement
  delay?: number
  duration?: number
  delayToHide?: number
  windowNode?: HTMLElement | Window & typeof globalThis
  placeOrder?: Array<'top' | 'bottom' | 'right' | 'left'>
  place?: 'top' | 'top-right' | 'top-left' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-right' | 'bottom-left' | 'left' | 'left-top' | 'left-bottom'
}

export const Tooltip: OpiumComponent<TooltipProps> = ({
  children,
  placeOrder = tooltipConfig.placeOrder as TooltipProps['placeOrder'],
  delay = tooltipConfig.delay as TooltipProps['delay'],
  duration = tooltipConfig.duration,
  place,
  delayToHide = tooltipConfig.delayToHide,
  parentNode,
  windowNode,
  ...rest
}: TooltipProps) => {
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

  function handleParentClick() {
    trackMouseHold()
    if (opened) {
      handleClose()
      removeTrackers()
    }
  }

  function startWaiting() {
    setInPlace()
    parentNode?.addEventListener('mousemove', trackMouseHold)
    parentNode.addEventListener('click', handleParentClick)
  }

  function stopWaiting() {
    parentNode?.removeEventListener('mousemove', trackMouseHold)
    parentNode?.removeEventListener('click', handleParentClick)
  }


  function handleOpen(event?: any) {
    if (!targetNode) { return }
    hovered = true
    if (opened) { return }
    targetNode.style.display = 'block'
    setInPlace()
    setTimeout(() => {
      if (!document.contains(parentNode)) {
        handleClose()
        return
      }
      hotkeys('esc', 'tooltips', handleClose)
      hotkeys.setScope('tooltips')
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
    clearMouseHold()
  }

  function clearMouseHold() {
    clearTimeout(timeout)
  }

  function handleSourceRef(node) {
    if (!node) { return }
    parentNode = parentNode || node.previousElementSibling || node.parentNode
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
    <Fit forwardRef={handleSourceRef} hidden>
      <Portal>
        <Fit.TryTagless transition="opacity">
          <Gap
            forwardRef={handleTargetRef}
            hidden
            transition={`opacity ${duration}ms`}
            opacity="0"
            size="10px"
          >

            <Box.TryTagless blur="md" fill="baseDown" inverse radius="4px" {...rest}>
              <Font.TryTagless fill="base">
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


Tooltip.displayName = 'Tooltip'
Tooltip.demoProps = {}