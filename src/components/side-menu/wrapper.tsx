import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import {MakeButton} from '../make-button'

export type Props = React.HTMLAttributes<HTMLElement> & {}

export function Wrapper ({ children, ...rest }: Props) {
  return (
    <Fit.TryTagless width="120px" {...rest}>
      <Box.TryTagless fill="base" shadow="sm">
        <Align hor="center">

          <Gap hor="none">
            <Align gapVert="x3s">
              {children}
            </Align>
          </Gap>

          <Align.Spacer />

          {/* <Fit width="100%">
            <Line fill="faint" />
          </Fit>

          <MakeButton radius="0" offset="0">
            <Gap vert="md" hor="x2s">
              <Align hor="center">
                <Ava abbr="ОП" fill="base" />
                <Gap size="xs" />
                <Font align="center" size="x2s" weight="600" fill="base">
                  ИП Опиум продакшн
            </Font>
                <Gap size="xs" />
                <Font align="center" size="x2s" weight="400" fill="faint">
                  Элиановский Денис Олегович
            </Font>

              </Align>
            </Gap>
          </MakeButton> */}
        </Align>

      </Box.TryTagless>
    </Fit.TryTagless>
  )
}