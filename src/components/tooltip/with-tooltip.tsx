import React, { FC } from 'react'
import { Tooltip, TooltipProps } from './tooltip'
import { OpiumCHook } from '../../types'


export type WithTooltipProps = {
  tooltip?: any
  tooltipPlace?: string
  tooltipDelay?: number
}


export type WithTooltip<ComponentProps = {}> = FC<ComponentProps & WithTooltipProps>

export const withTooltip: OpiumCHook<WithTooltip> = (Component, props?: TooltipProps) => {
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

withTooltip.type = 'hook'
withTooltip.demoComponent = ['Button', { label: 'Hey, hover me!', primary: true, height: "150px", minWidth: "200px" }]
withTooltip.demoProps = {
  tooltip: ['string', `I'm a tooltip`],
  tooltipDelay: ['number', 200],
  tooltipPlace: ['select', undefined, ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'right', 'right-top', 'right-bottom', 'left', 'left-top', 'left-bottom']],
}