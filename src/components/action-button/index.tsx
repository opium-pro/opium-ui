import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import {MakeButton} from '../make-button'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  label?: string,
  icon?: string,
  primary?: boolean,
  select?: boolean,
  critic?: boolean,
}


export const ActionButton = ({ label, icon, primary, select, disabled, critic, ...rest }: Props) => (
  <MakeButton
    {...rest}
    disabled={disabled}
  >
    <Align.TryTagless row vert="center">
      <Icon
        name={icon}
        fill={(disabled && 'faint-down') || (critic && "critic") || (primary ? "accent" : "base")}
      />
      <Gap size="xs" />

      <Font
        size="xs"
        weight={primary ? "600" : "400"}
        fill={(disabled && 'faint-down') || (critic ? "critic" : "base")}
      >
        {label}
      </Font>

      {select && (<>
        <Gap size="xs" />
        <Icon size="sm" name="ChevronDown" fill="base" />
      </>)}
    </Align.TryTagless>
  </MakeButton>
)