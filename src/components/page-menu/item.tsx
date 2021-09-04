import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import { MakeButton } from 'opium-ui'
import { Counter } from 'opium-ui'
import { Link } from 'react-router-dom'

export type Props = React.HTMLAttributes<HTMLElement> & {
  label?: string,
  icon?: string,
  counter?: number,
  active?: boolean,
  link?: string,
}

export default function ({
  label,
  active,
  icon,
  counter,
  link,
  ...rest
}: Props) {
  return (
    <Link to={link}>
      <MakeButton
        offset="0"
        disabled={active}
        {...rest}
      >
        <Fit.TryTagless width="100%" height="42px">
          <Gap.TryTagless hor="md">
            <Align row gapHor="xs" vert="center">
              <Font
                nowrap
                align="center"
                size="xs"
                noselect
                fill={active ? "base" : "faint-down"}
                weight={active ? "600" : "500"}
              >
                {label}
              </Font>
              {!!counter && <Counter attention value={counter} />}
            </Align>
          </Gap.TryTagless>
        </Fit.TryTagless>
      </MakeButton>
    </Link>
  )
}