import React, { FC, useRef } from 'react'
import { Font, Box, Align, Fit, FitProps } from 'themeor'


export interface WrapperProps extends FitProps {}


export const Wrapper: FC<WrapperProps> = ({ children, ...rest }) => {
  const originalRef: any = useRef()

  const portal = (
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

  if (!originalRef.current) {
    return null
  }

  return (
    <Fit
      forwardRef={r => originalRef.current = r}
      width="100%"
      top="calc(100% + 10px)"
      {...rest}
    />
  )
}
