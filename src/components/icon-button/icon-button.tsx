import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'

export type Props = React.AllHTMLAttributes<HTMLElement> & {
  icon: string,
  fill?: string,
  [key: string]: any,
}

export const IconButton = ({ icon, fill, line, ...rest }: Props) => (
  <Reaction track={['hover', 'focus', 'active']}>
    {(rProps, r) => (
      <Fit.TryTagless
        {...rProps}
        {...rest}
        width="48px"
        height="48px"
        style={{ margin: "-10px" }}
      >
        <Align vert="center" hor="center">

          <Fit.TryTagless
            width={r.hoverOrFocus ? "48px" : "0"}
            height={r.hoverOrFocus ? "48px" : "0"}
            stick="top-left"
            top={r.hoverOrFocus ? "0" : "24px"}
            left={r.hoverOrFocus ? "0" : "24px"}
          >
            <Box
              style={{ transition: "all, 0.2s ease" }}
              radius="max"
              fill={r.active ? "faint" : "--hovereffect"}
            />
          </Fit.TryTagless>

          <Fit.TryTagless width="20px" height="20px">
              <Align vert="center" hor="center">
                <Icon name={icon} fill={fill} line={line} />
              </Align>
          </Fit.TryTagless>

        </Align>
      </Fit.TryTagless>
    )}
  </Reaction>
)