import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'

type Props = React.AllHTMLAttributes<HTMLElement> & {
  label?: string,
  primary?: boolean,
  type?: string,
  mini?: boolean,
}

export const Button = ({
  label,
  primary,
  type = "button",
  disabled,
  mini,
  ...rest
}: Props) => (
  <Reaction smooth track={['hover', 'focus', 'active']}>
    {(rProps, r) => (
      <div>
        <Fit.TryTagless inline height={mini ? "32px" : "48px"}>
          <Box.TryTagless
            fill={(disabled && "faint-up") || (primary ? ((r.active && 'accent-up') || (r.hoverOrFocus ? "accent-down" : "accent")) : (r.hoverOrFocus ? "faint" : "none"))}
            borderFill={primary ? "none" : "faint-up"}
            strong={primary && !disabled}
            radius="xs"
          >
            <Align.TryTagless vert="center" hor="center">
              <Font.TryTagless
                nowrap
                fill={disabled ? "faint-down" : "base"}
                weight={primary ? "600" : "500"}
                size="sm"
                family="regular"
              >
                <Gap.TryTagless hor="xl">
                  <button disabled={disabled} {...rProps} {...rest} type={type}>{label}</button>
                </Gap.TryTagless>
              </Font.TryTagless>
            </Align.TryTagless>
          </Box.TryTagless>
        </Fit.TryTagless>
      </div>
    )}
  </Reaction>
)