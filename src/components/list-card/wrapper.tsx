import React, { FC, PropsWithChildren } from 'react'
import { Font, Box, Align, Gap, Reaction, Fit } from 'themeor'
import { Avatar } from '../avatar/index.js'


export interface IWrapperProps {
  img?: string
  title?: string
  link?: string
  onClick?: any
}


export const Wrapper: FC<PropsWithChildren<IWrapperProps>> = ({
  title,
  img,
  link,
  children,
  ...rest
}) => {

  return (
    <Reaction smooth {...rest}>
      {(rProps, r) => (
        <Fit.TryTagless
          tabIndex={0}
          top={r.hoverOrFocus ? '-4px' : '0'}
          clip
          FORCE_TAGLESS
          {...rProps}
        >
          <Box
            fill="base"
            radius="md"
            shadow={r.hoverOrFocus ? "xl" : "md"}
          >
            <Gap>
              <Align row vert="center">
                <Avatar img={img} name={title} />
                <Gap />
                <Align gapVert="x2s">
                  <Font
                    size="lg"
                    weight="600"
                    fill="base"
                  >
                    {title}
                  </Font>
                  {children}
                </Align>
              </Align>
            </Gap>
          </Box>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}
