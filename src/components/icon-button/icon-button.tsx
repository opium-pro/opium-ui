import React from 'react'
import { Align, Fit, Box, Font, IconProps, Gap, Icon, Reaction } from 'themeor'
import { withTooltip } from '../tooltip'

type Props = Omit<IconProps, 'size'> & {
  name: string
  fill?: string
  forwardRef?: any
  size?: string
  label?: string
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
  size = 'md',
  label,
  ...rest
}: Props) => (
  <Reaction track={['hover', 'focus', 'active']}>
    {(rProps, r) => (
      <Align hor="center" forwardRef={forwardRef} {...rProps}>
        <Fit.TryTagless
          width={SIZES[size] + 'px'}
          height={SIZES[size] + 'px'}
          style={{ margin: "-10px" }}
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
                fill={r.active ? "faint" : "hovereffect"}
              />
            </Fit.TryTagless>

            <Fit.TryTagless width="20px" height="20px">
              <Align vert="center" hor="center">
                <Icon name={name} fill={fill} {...rest} />
              </Align>
            </Fit.TryTagless>

          </Align>
        </Fit.TryTagless>
        {label && (<>
          <Gap size="4px" />
          <Font fill={fill} size="xs">{label}</Font>
        </>)}
      </Align>
    )}
  </Reaction>
))