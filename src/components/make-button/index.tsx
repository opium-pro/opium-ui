import React, { FC } from 'react'
import { FitProps, Fit, Box, Reaction, Align, AlignProps, CommonProps } from 'themeor'
import { withTooltip, WithTooltipProps } from '../tooltip'
import { OpiumComponent } from '../../types'


export type MakeButtonProps = WithTooltipProps & AlignProps & FitProps & CommonProps & {
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
  vert, hor,
  gapVert, gapHor,
  row,
  pattern,
  ...rest
}: MakeButtonProps) => (
  <Reaction
    {...rest}
    disabled={disabled}
    track={track as any}
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
              fill={r.active ? "faint" : "hovereffect"}
              style={{
                transition: "all 0.2s ease",
                opacity: fade ? (r.hoverOrFocus ? "1" : "0") : undefined,
              }}
            />
          </Fit.TryTagless>
        )}

        <Align.TryTagless vert={vert} hor={hor} gapVert={gapVert} gapHor={gapHor} row={row} pattern={pattern}>
          <Fit>
            {typeof children === 'function' ? (
              children(r)
            ) : (
              children
            )}
          </Fit>
        </Align.TryTagless>
      </Fit.TryTagless>
    )}
  </Reaction>
)) as OpiumComponent<MakeButtonProps>


MakeButton.displayName = 'MakeButton'
MakeButton.demoProps = {}