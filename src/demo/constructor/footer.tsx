import { Font, Align, Gap, Line } from 'themeor'

export const Footer = () => (
  <Gap vert="40px">
    <Align vert="center" hor="center">
      <Font align="center" fill="faintDown">
        made by <Gap.TryTagless bottom="4px"><Line.TryTagless bottom="md" fill="faintUp"><Font.TryTagless inline><a target="_blank" href="http://opium.pro">opium.pro</a></Font.TryTagless></Line.TryTagless></Gap.TryTagless>
      </Font>
    </Align>
  </Gap>
)