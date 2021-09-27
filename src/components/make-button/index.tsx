import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import { withTooltip } from '../tooltip'

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
  offset?: string,
  disabled?: boolean,
  radius?: string,
  track?: string | string[],
  fade?: boolean,
  forwardRef?: any,
}

export const MakeButton = withTooltip(({
  children,
  offset = "10px",
  disabled,
  radius = "md",
  track = ["hover", "active"],
  fade,
  forwardRef,
  ...rest
}: Props) => (
  <Reaction
    {...rest}
    track={disabled ? undefined : track as any}
    cursor={disabled ? "default" : "pointer"}
    tabIndex={0}
  >
    {(rProps, r) => (
      <Fit.TryTagless
        {...rProps}
        style={{
          margin: `-${offset.split(' ').join(' -')}`,
          padding: offset,
        }}
        forwardRef={forwardRef}
      >
        {!disabled && (
          <Fit.TryTagless
            width={r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined)}
            height={r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined)}
            stick="top-left"
            top={r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined)}
            left={r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined)}
          >
            <Box
              radius={r.hoverOrFocus ? radius as any : 'max'}
              fill={r.active ? "faint" : "--hovereffect"}
              style={{
                transition: "all 0.2s ease",
                opacity: fade ? (r.hoverOrFocus ? "1" : "0") : undefined,
              }}
            />
          </Fit.TryTagless>
        )}

        <Fit>
          {typeof children === 'function' ? (
            children(r)
          ) : (
            children
          )}
        </Fit>
      </Fit.TryTagless>
    )}
  </Reaction>
))