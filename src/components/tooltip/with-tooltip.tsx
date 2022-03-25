import React from 'react'
import { Tooltip, TooltipProps } from './tooltip'

export type WithTooltipProps<ComponentProps> = ComponentProps & {
  tooltip?: any
  tooltipPlace?: string
  tooltipDelay?: number
}

export function withTooltip(Component, props?: TooltipProps) {
  return ({ tooltip, tooltipDelay, forwardRef, tooltipPlace, ...rest }: any) => {

    return (<>
      <Component {...rest} />
      {tooltip && (
        <Tooltip
          delay={tooltipDelay}
          place={tooltipPlace}
          {...props}
        >{tooltip}
        </Tooltip>
      )}
    </>)
  }
}