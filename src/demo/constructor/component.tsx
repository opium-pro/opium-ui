import { FC } from 'react'
import { Font, Align, Gap, Line, Fit, Box } from 'themeor'
import { usePath, nav } from 'opium-nav'
import { LimitWidth, Tag, Form, ScreenFit, BackButton } from '../../components'
import * as mainMenu from '../index'
import { Example } from './example'


export const Component: FC = () => {
  const { path } = usePath()
  const group = path.split('/')[1]
  const component = path.split('/')[2]
  const Component = mainMenu[group][component]
  const isHook = Component.displayName?.slice(0, 3) === 'use'
  const isHoc = Component.displayName?.slice(0, 4) === 'with'

  return (
    <ScreenFit>
      <Fit.TryTagless sticky top="0" zIndex={2}>
        <Box fill="baseDown" blur="md">
          <LimitWidth>
            <Gap size="20px" />

            <Align row vert="center">
              <BackButton label="Back" onClick={() => nav.back()} />
              <Gap size="32px" />
              <Font size="x2l" weight="800">
                {component}
              </Font>

              <Gap />

              {isHoc && (<>
                <Gap size="4px" />
                <Tag label="HOC" />
              </>)}

              {isHook && (<>
                <Gap size="4px" />
                <Tag label="Hook" />
              </>)}
            </Align>

            <Gap size="20px" />
          </LimitWidth>

          <Line fill="faintDown" />
        </Box>
      </Fit.TryTagless>
      <LimitWidth>
        <Form>
          <Example Component={Component} />
        </Form>
      </LimitWidth>
    </ScreenFit>
  )
}