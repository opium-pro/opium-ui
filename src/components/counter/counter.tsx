import { Align, Fit, Box, Font, Line, Gap, Icon } from 'themeor'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  value: string | number,
  attention?: boolean,
  base?: boolean,
}

export const Counter = ({ value, attention, base }: Props) => (
  <Fit.TryTagless minWidth="20px" height="20px">
    <Gap.TryTagless hor="x2s">
    <Box.TryTagless
      radius="max"
      fill={(base && 'base') || (attention ? "critic" : "faint")}
      strong={attention}
      shadow={!!base ? 'sm' : 'none'}
    >
    <Align vert="center" hor="center">
      <Font
        size="x3s"
        weight="700"
        fill={(attention || base) ? "base" : "faint"}
      >
        {value}
      </Font>
    </Align>
    </Box.TryTagless>
    </Gap.TryTagless>
  </Fit.TryTagless>
)