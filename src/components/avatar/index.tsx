import React, { FC } from "react";
import { Align, Fit, Box, Font, Icon } from "themeor";

export const SIZE = {
  sm: { circle: "40px", font: "x2s" },
  md: { circle: "80px", font: "lg" },
  lg: { circle: "120px", font: "x2l" },
  xl: { circle: "160px", font: "x3l" },
};

export interface IAvatarProps {
  name?: string;
  img?: string;
  fill?: string;
  size?: keyof typeof SIZE;
  icon?: string;
}

const fills = ['accent', 'base', 'faint', 'complement', 'critic', 'warning', 'success']

export const Avatar: FC<IAvatarProps> = ({
  name,
  size = "md",
  img,
  fill,
  icon,
}) => {
  const abbr = name?.slice(0, 2)?.toUpperCase()
  const index = abbr?.charCodeAt(0) % 7 || 0

  return (
    <Fit.TryTagless width={SIZE[size].circle} height={SIZE[size].circle}>
      <Align.TryTagless vert="center" hor="center">
        <Box.TryTagless
          img={img}
          fill={fill || fills[index]}
          strong
          radius="max"
        >
          {icon && <Icon name={icon} />}
          <Font fill="base" weight="600" size={SIZE[size].font as any}>
            {abbr}
          </Font>
        </Box.TryTagless>
      </Align.TryTagless>
    </Fit.TryTagless>
  )
}
