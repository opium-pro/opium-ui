import React, { FC } from 'react'
import { Align, Fit, Box, Line, BoxProps, Gap, Animate } from 'themeor'
import { useScreenFit } from '../screen-fit'


type Props = BoxProps & {
  size?: number
}

export const Wrapper: FC<Props> = ({ size, children, ...rest }) => {
  const { isSmall } = useScreenFit()

  return (<>
    {isSmall && <Gap size="20px" />}
    <Animate.TryTagless onMount={isSmall && "fadeInUp" as any}>
      <Fit.TryTagless
        minHeight={!isSmall && "100%"}
        width={size}
        minWidth={isSmall ? '200px' : '100px'}
        scroll={!isSmall}
        maxWidth="100%"
      >
        <Line.TryTagless
          weight={isSmall && "md"}
          left={isSmall && "md"}
          fill="faint-down"
        >
          <Box.TryTagless
            fill="base"
            radius={isSmall && "md"}
            shadow="lg"
            {...rest}
          >
            <Align hor="stretch">
              {children}
            </Align>
          </Box.TryTagless>
        </Line.TryTagless>
      </Fit.TryTagless>
    </Animate.TryTagless>
    {isSmall && <Gap size="20px" />}
  </>)
}