import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import {MakeButton} from '../make-button'

type Props = React.HTMLAttributes<HTMLElement> & {}

export function BackButton ({onClick}: Props) {
  return (
    <MakeButton onClick={onClick} radius="max">
      <Align row vert="center" gapHor="md">
        <Icon name="Placeholder" />
      </Align>
    </MakeButton>
  )
}