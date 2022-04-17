import React, { FC } from 'react'
import { Font, Box, Align, Gap, Reaction, Fit, FitProps } from 'themeor'
import { Avatar } from '../avatar'


export type RowProps = FitProps & {
  img?: string
  title?: string
  link?: string
  onClick?: any
}


export const Row: FC<RowProps> = ({
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
          FORCE_TAGLESS
          zIndex={r.hoverOrFocus ? 1 : undefined}
          {...rProps}
        >
          <Box.TryTagless
            fill="base"
            radius="md"
            shadow={r.hoverOrFocus ? "lg" : undefined}
          >
            <Gap.TryTagless>
              <tr>
                <td>
                  <Gap size="4px" />
                </td>
                <td>
                  <Avatar size="xs" img={img} name={title} />
                </td>
                {/* <Gap />
                <Font
                  wrap
                  size="md"
                  weight="600"
                  fill="base"
                >
                  {title}
                </Font> */}
                {children}
                <td>
                  <Gap size="4px" />
                </td>
              </tr>
            </Gap.TryTagless>
          </Box.TryTagless>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}
