import { Font, Align, Gap, Reaction, Icon } from 'themeor'


export const Footer = () => (
  <Gap vert="40px">
    <Align vert="center" hor="center">
      <Font align="center" fill="faintDown">
        <Align row vert="center">
          made by
          <Gap size="4px" />

          <Reaction>
            {(rProps, r) => (
              <Font.TryTagless fill={r.hover && "base"}>
                <Align.TryTagless row vert="center">
                  <a target="_blank" href="http://opium.pro" {...rProps}>
                    <Icon fill={r.hover ? "base" : "faint"} name="opium-pro" />
                    opium.pro
                  </a>
                </Align.TryTagless>
              </Font.TryTagless>
            )}
          </Reaction>
        </Align>
      </Font>
    </Align>
  </Gap>
)