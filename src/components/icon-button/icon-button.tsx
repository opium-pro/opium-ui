import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import { withTooltip } from '../tooltip'

type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'> & {
  name: string
  fill?: string
  [key: string]: any
  forwardRef?: any
  size?: string
}

export const SIZES = {
  xs: 32,
  sm: 40,
  md: 48,
}

export const IconButton = withTooltip(({
  forwardRef,
  name,
  fill,
  line,
  size='md',
  ...rest
}: Props) => (
  <Reaction track={['hover', 'focus', 'active']}>
    {(rProps, r) => (
      <Fit.TryTagless
        {...rProps}
        {...rest}
        width={SIZES[size] + 'px'}
        height={SIZES[size] + 'px'}
        style={{ margin: "-10px" }}
        ret={forwardRef}
      >
        <Align vert="center" hor="center">

          <Fit.TryTagless
            width={r.hoverOrFocus ? SIZES[size] + 'px' : "0"}
            height={r.hoverOrFocus ? SIZES[size] + 'px' : "0"}
            stick="top-left"
            top={r.hoverOrFocus ? "0" : SIZES[size] / 2 + 'px'}
            left={r.hoverOrFocus ? "0" : SIZES[size] / 2 + 'px'}
          >
            <Box
              style={{ transition: "all, 0.2s ease" }}
              radius="max"
              fill={r.active ? "faint" : "--hovereffect"}
            />
          </Fit.TryTagless>

          <Fit.TryTagless width="20px" height="20px">
              <Align vert="center" hor="center">
                <Icon name={name} fill={fill} forceLine={line} />
              </Align>
          </Fit.TryTagless>

        </Align>
      </Fit.TryTagless>
    )}
  </Reaction>
))