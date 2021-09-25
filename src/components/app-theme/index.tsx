import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Theme, Fit, Box, Font } from 'themeor'
import themeConfig from '../../theme/config.json'
import themeIcons from '../../theme/iconList'

export type AppThemeProps = React.AllHTMLAttributes<HTMLElement> & {
  config?: any
  icons?: any
}

export function AppTheme ({ config, icons, children }: AppThemeProps) {
  return (
    <Theme config={config || themeConfig} icons={icons || themeIcons} reset>
      <Fit.TryTagless minHeight="100vh">
        <Box.TryTagless fill="base">
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