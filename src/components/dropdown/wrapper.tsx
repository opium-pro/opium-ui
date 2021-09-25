import React, { FC } from 'react'
import { Font, Box, Align, Fit, FitProps } from 'themeor'


export interface WrapperProps extends FitProps {}


export const Wrapper: FC<WrapperProps> = ({ children, ...rest }) => {
  return (
    <Fit
      minWidth="100%"
      top="calc(100% + 10px)"
      {...rest}
    >
      <Box radius="md" shadow="lg" fill="base">
        {children}
      </Box>
    </Fit>
  )
}
