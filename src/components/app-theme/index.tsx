import React from 'react'
import { Theme, Fit, Box, Font } from 'themeor'
import themeConfig from '../../theme/config'
import themeIcons from '../../theme/iconList'
import { ScreenFit } from '../screen-fit'


export type AppThemeProps = React.AllHTMLAttributes<HTMLElement> & {
  config?: any
  icons?: any
}

export function AppTheme({ config, icons, children }: AppThemeProps) {
  return (
    <ScreenFit>
      <Theme reset config={config || themeConfig} icons={icons || themeIcons}>
        <Fit.TryTagless minHeight="100vh">
          <Box.TryTagless fill="base">
            <Font.TryTagless family="regular" fill="base" size="sm" weight="500" lineHeight="md">
              {children}
            </Font.TryTagless>
          </Box.TryTagless>
        </Fit.TryTagless>
      </Theme>
    </ScreenFit>
  )
}