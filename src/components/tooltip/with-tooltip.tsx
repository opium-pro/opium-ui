import React, { useState } from 'react'
import { Tooltip, TooltipProps } from './tooltip'

export type WithTooltipProps = {
  tooltip?: any
  tooltipPlace?: string
  tooltipDelay?: number
}

export function withTooltip(Component, props?: TooltipProps) {
  return ({ tooltip, tooltipDelay, forwardRef, tooltipPlace, ...rest }: any) => {
    const [parentNode, setParentNode] = useState()

    function handlreRef(node) {
      forwardRef instanceof Function && forwardRef(node)
      setParentNode(node)
    }

    return (<>
      <Component {...rest} forwardRef={handlreRef} />
      {tooltip && (
        <Tooltip
          delay={tooltipDelay}
          place={tooltipPlace}
          parentNode={parentNode}
          {...props}
        >{tooltip}
        </Tooltip>
      )}
    </>)
  }
}