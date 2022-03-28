import React, { FC } from 'react'
import { Tooltip, TooltipProps } from './tooltip'

export type WithTooltipProps<ComponentProps> = ComponentProps & {
  tooltip?: any
  tooltipPlace?: string
  tooltipDelay?: number
}


export type WithTooltip<ComponentProps> = FC<WithTooltipProps<ComponentProps>>

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