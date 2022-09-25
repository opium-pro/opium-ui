import React from 'react'
import { useState, useEffect } from 'react'
import { FitProps, Fit, Font } from 'themeor'
import { withTooltip, WithTooltipProps, Tooltip } from '../tooltip/index.js'


export type LineCutProps = FitProps & {
  lines?: number,
  lineHeight?: string,
}

export const LineCut = ({ children, lines, lineHeight, ...rest }: LineCutProps) => {
  const [parentSize, setParentSize] = useState(0)
  const [childSize, setChildSize] = useState(0)

  function parentRef(ref) {
    if (!ref) { return }
    if (!parentSize) {
      setParentSize(lines ? ref.clientHeight : ref.clientWidth)
    }
  }

  function childRef(ref) {
    if (!ref) { return }
    if (!childSize) {
      setChildSize(lines ? ref.scrollHeight : ref.scrollWidth)
    }
  }

  let active = true
  if (childSize <= parentSize) {
    active = false
  }

  return (<>
    <Fit
      forwardRef={parentRef}
    >
      <Fit
        {...rest}
        clip
        maxHeight={(lines && lineHeight) ? (lines * parseInt(lineHeight)).toString() + 'px' : undefined}
      >
        <Font
          nowrap={!lines}
          forwardRef={childRef}
        >
          {children}
        </Font>
      </Fit>

      {active && (
        <Fit
          stick="bottom-right"
          right="-10px"
        >
          …
        </Fit>
      )}
    </Fit>
    {active && <Tooltip>
      {children}
    </Tooltip>}
  </>)
}