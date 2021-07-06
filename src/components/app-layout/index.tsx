import { Align, Fit, Box, Font, Line, Gap } from 'themeor'
import {useHistory} from 'react-router-dom'
import {MoovingSpots} from '../mooving-spots'
import SideMenu from '../side-menu'
import {LimitWidth} from '../limit-width'

export type Props = React.AllHTMLAttributes<HTMLElement> & {}

export function AppLayout (p: Props) {
  const { mainMenu, applyTrigger } = useContext()
  const history = useHistory()

  return (
    <Align row vert="stretch">

      <Fit.TryTagless FORCE_TAGLESS maxHeight="100vh" scroll zIndex={200}>
        <SideMenu>
          {mainMenu?.map(({ path, ...item }, index) => (
            <SideMenu.Item
              key={index}
              onClick={() => applyTrigger('switch-page', path)}
              active={path === window.location.pathname}
              {...item}
            />
          ))}
        </SideMenu>
      </Fit.TryTagless>

      <Align.Spacer>
        <Fit height="100vh" zIndex={100} scroll>

          <Fit.TryTagless minHeight="100vh" FORCE_TAGLESS>
            <MoovingSpots>


              <Fit.TryTagless style={{
                position: 'sticky',
                top: '0',
                zIndex: 100,
              }}>
                <Box strong>
                  <Gap vert="xs">
                    <LimitWidth>
                      <Align row>
                        <Font size="x2s" weight="600">
                          ООО "Скиллбокс"
                          </Font>

                        <Align.Spacer />

                        <Font onClick={() => {
                          logout()
                          history.push('/login')
                        }} size="x2s" weight="600">
                          Элиановский Д.О.
                        </Font>
                      </Align>
                    </LimitWidth>
                  </Gap>
                </Box>
              </Fit.TryTagless>


              {p.children}
            </MoovingSpots>
          </Fit.TryTagless>

        </Fit>
      </Align.Spacer>
    </Align>
  )
}