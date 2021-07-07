import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Effect } from 'themeor'
import {LimitWidth} from '../limit-width'


type Props = React.AllHTMLAttributes<HTMLElement> & {
  width?: number,
  show?: boolean,
  status?: string,
  comission?: string,
  sum?: string,
}

export const ActionPanel = ({ children, status, comission, sum }: Props) => {
  return (
    <Fit.TryTagless clip style={{
          position: 'sticky',
          bottom: '10px',
          zIndex: 100,
          margin: '0 -10px',
        }}>
        <Box radius="md" fill="--notification" blur="md" strong>

      {(status || sum || comission) && (

          <LimitWidth>

              <Gap.TryTagless vert="xs">
                <Font.TryTagless fill="base">
                  <Align vert="center" row>
                    {status}
                    <Gap size="x2s" />
                    <Font weight="600">
                      {sum}
                    </Font>
                    <Gap size="x2s" />
                    {comission}
                  </Align>
                </Font.TryTagless>
              </Gap.TryTagless>

          </LimitWidth>

      )}


        <LimitWidth>
          <Fit.TryTagless>
            <Gap.TryTagless vert="md">
              <Align row gapHor="xl" vert="center" hor="left">
                {children}
              </Align>
            </Gap.TryTagless>
          </Fit.TryTagless>
        </LimitWidth>


      </Box>

    </Fit.TryTagless>
  )
}