import React, { FC } from 'react'
import { Font, Box, Align, Gap, Reaction, Fit } from 'themeor'
import { Avatar } from '../avatar'


export interface IWrapperProps {
  img?: string
  title?: string
  link?: string
  onClick?: any
}


export const Wrapper: FC<IWrapperProps> = ({
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
          <a href={link}>
            <Box
              fill="base"
              radius="md"
              shadow={r.hoverOrFocus ? "xl" : "md"}
            >
              <Gap>
                <Align row vert="center">
                  {img && <Avatar img={img} name={title} />}
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
          </a>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}
