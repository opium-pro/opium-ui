import ReactTooltip from 'react-tooltip'
import { Theme, Align, Fit, Box, Font, Line, Gap } from 'themeor'
import themeConfig from '../../theme/config.json'
import icons from '../../theme/icons'

type Props = React.AllHTMLAttributes<HTMLElement> & {}

export function AppTheme ({ children }: Props) {
  return (
    <Theme config={themeConfig} icons={icons} reset global>
      <Fit.TryTagless minHeight="100vh">
        <Box.TryTagless fill="faint-down">
          <Font.TryTagless family="regular" fill="base" size="sm" weight="500" lineHeight="md">
            <ReactTooltip
              delayShow={600}
              delayHide={50}
              arrowColor="transparent"
              html={true}
              effect="solid"
              multiline={true}
              className="tooltip"
            />

            {children}
          </Font.TryTagless>
        </Box.TryTagless>
      </Fit.TryTagless>
    </Theme>
  )
}