import React, { FC, useRef, useState } from 'react'
import { Font, Box, Align, Gap, Reaction, Fit, FitProps } from 'themeor'
import { Avatar } from '../avatar'
import { LazyScroller } from '../lazy-scroller'


export type WrapperProps = FitProps & {
  img?: string
  title?: string
  link?: string
  onClick?: any
  header?: any
}


export const Wrapper: FC<WrapperProps> = ({
  title,
  img,
  link,
  children,
  header,
  ...rest
}) => {
  const [node, setNode]: any = useState()

  return (
    <Fit.TryTagless
      FORCE_TAGLESS
      scroll
      {...rest}
    >
      <Box
        fill="base"
        radius="md"
      >
        <table style={{ width: '100%' }}>
          <Fit.TryTagless sticky top="0">
            <thead>
              <tr>
                <th />
                <th />
                {header}
                <th />
              </tr>
            </thead>
          </Fit.TryTagless>
          <LazyScroller Tag="tbody">
            {children}
          </LazyScroller>
        </table>
      </Box>
    </Fit.TryTagless>
  )
}
