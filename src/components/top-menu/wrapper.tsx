import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import {Ava} from '../ava'
import {LimitWidth} from '../limit-width'

export type Props = React.HTMLAttributes<HTMLElement> & {}

export function Wrapper ({ children, ...rest }: Props) {
  return (
    <Fit.TryTagless left="-16px" {...rest}>
      <Box fill="base" shadow="md">
        <LimitWidth>
            <Align row gapHor="x3s" vert="center">
              {children}
            </Align>
        </LimitWidth>
      </Box>
    </Fit.TryTagless>
  )
}