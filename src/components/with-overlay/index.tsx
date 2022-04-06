import React, { FC } from 'react'
import { withExternalClick, WithExternalClickProps } from '../with-external-click'
import { withMouseHold, WIthMouseHoldProps } from '../with-mouse-hold'
import { Portal } from '../portal'
import { Fit } from 'themeor'
import { placeNode } from '../../utils'


export type WithOverlayProps = WIthMouseHoldProps & WithExternalClickProps & {
  place?: 'top' | 'top-right' | 'top-left' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-right' | 'bottom-left' | 'left' | 'left-top' | 'left-bottom'
  placeOrder?: Array<'top' | 'bottom' | 'right' | 'left'>
}

export type WithOverlay<Props = WithOverlayProps> = (arg: FC<any>) => FC<Props>


export const withOverlay: WithOverlay = (Component) => {
  return ({
    children,
    placeOrder = ['top', 'bottom', 'right', 'left'],
    place,
    onMouseHold,
    onExternalClick,
    ...rest
  }) => {
    let parentNode
    let targetNode
    Component = withMouseHold(withExternalClick(Component))

    function handleSourceNode(node) {
      parentNode = node.previousElementSibling || node.parentNode
    }

    placeNode(targetNode, parentNode, placeOrder, place)

    return (
      <Fit forwardRef={handleSourceNode} hidden>
        <Portal>
          <Fit.TryTagless forwardRef={n => targetNode = n}>
            <Component
              {...rest}
              onExternalClick={onExternalClick}
              onMouseHold={onMouseHold}
            />
          </Fit.TryTagless>
        </Portal>
      </Fit>
    )
  }
}