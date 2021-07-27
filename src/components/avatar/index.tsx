import React, { FC } from "react";
import { Align, Fit, Box, Font, Icon } from "themeor";

export const SIZE = {
  sm: { circle: "40px", font: "x2s" },
  md: { circle: "80px", font: "lg" },
  lg: { circle: "160px", font: "xl" },
};

export interface IAvatarProps {
  name?: string;
  img?: string;
  fill?: string;
  size?: keyof typeof SIZE;
  icon?: string;
}

export const Avatar: FC<IAvatarProps> = ({
  name,
  size = "md",
  img,
  fill = "accent",
  icon,
}) => (
  <Fit.TryTagless width={SIZE[size].circle} height={SIZE[size].circle}>
    <Align.TryTagless vert="center" hor="center">
      <Box.TryTagless img={img} fill={fill} strong radius="max">
        <Icon name={icon} />
        <Font fill="base" weight="600" size={SIZE[size].font as any}>
          {!img && name}
        </Font>
      </Box.TryTagless>
    </Align.TryTagless>
  </Fit.TryTagless>
);
