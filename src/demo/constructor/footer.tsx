import { Font, Align, Gap, Reaction, Icon } from 'themeor'
import { Link } from '../../components'


export const Footer = () => (
  <Gap vert="40px">
    <Align vert="center" hor="center">
      <Font align="center" fill="faintDown">
        <Align row vert="center">
          made by
          <Link
            fill="faintDown"
            icon="opium-pro"
            href="http://opium.pro"
            blank
          >
            opium.pro
          </Link>
        </Align>
      </Font>
    </Align>
  </Gap>
)