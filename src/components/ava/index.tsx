import { Align, Fit, Box, Font, Line, Gap, Icon } from 'themeor'


export const Ava = ({abbr, fill="accent"}) => (
  <Fit.TryTagless width="40px" height="40px">
    <Align.TryTagless vert="center" hor="center">
      <Box.TryTagless fill={fill} strong radius="max">
        <Font fill="base" weight="700" size="x2s">
          {abbr}
        </Font>
      </Box.TryTagless>
    </Align.TryTagless>
  </Fit.TryTagless>
)