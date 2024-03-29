import React, { FC } from "react"
import { Align, Fit, Box, Font, Icon } from "themeor"
import { withTooltip, WithTooltipProps } from '../tooltip/index.js'

export const SIZE = {
  xs: { circle: "30px", font: "x3s" },
  sm: { circle: "40px", font: "x2s" },
  md: { circle: "80px", font: "lg" },
  lg: { circle: "120px", font: "x2l" },
  xl: { circle: "160px", font: "x3l" },
}

export type IAvatarProps = WithTooltipProps & {
  name?: string;
  img?: string;
  fill?: string;
  size?: keyof typeof SIZE;
  icon?: string;
}

const fills = ['accent', 'base', 'faint', 'complement', 'critic', 'warning', 'success']

export const Avatar: FC<IAvatarProps> = withTooltip(({
  name,
  size = "md",
  img,
  fill,
  icon,
  forwardRef,
  ...rest
}) => {
  let abbr = name?.slice(0, 2)?.toUpperCase()

  let index = 0
  for (const char of name || '') { index += char.charCodeAt(0) }
  index = index % fills.length || 0

  if (img && !img.includes('://')) {
    img = 'https://' + img
  }

  if (img || icon) {
    abbr = undefined
  }

  return (
    <Fit.TryTagless width={SIZE[size].circle} height={SIZE[size].circle}>
      <Align.TryTagless vert="center" hor="center">
        <Box.TryTagless
          img={img}
          fill={fill || fills[index]}
          radius="max"
          {...rest}
          forwardRef={forwardRef}
        >
          {icon && <Icon name={icon} />}
          {abbr && <Font
            fill="base"
            weight="600"
            size={SIZE[size].font as any}
          >
            {abbr}
          </Font>}
        </Box.TryTagless>
      </Align.TryTagless>
    </Fit.TryTagless>
  )
})