import React, { FC, useState, PropsWithChildren } from 'react'
import { Font, Box, Align, Gap, Fit, Animate, Icon } from 'themeor'
import { ActionButton } from '../action-button/index.js'
import { Portal } from '../portal/index.js'
import { Link } from '../link/index.js'


export interface NoticeProps {
  title?: any
  text?: any
  type?: 'base' | 'critic' | 'warning'
  onClose?: any
  moreLabel?: string
}


export const Notice: FC<PropsWithChildren<NoticeProps>> = ({ title, text, type = 'base', onClose, moreLabel = 'more', children }) => {
  const [show, setShow] = useState(true)
  const [opened, setOpened] = useState(false)

  function handleClose() {
    setShow(false)
    setTimeout(() => onClose?.(), 3000)
  }

  return (
    <Portal>
      <Animate.TryTagless
        mounted={show}
        onMount="slideInUp"
        onUnmount="slideOutDown"
      >
        <Fit.TryTagless
          fixed
          bottom="0"
          right="0"
          maxWidth="100%"
          zIndex={1000}
        >
          <Align.TryTagless hor="right">
            <Gap>

              <Fit.TryTagless scroll>
                <Box inverse fill={type} radius="md" width="400px" maxWidth="100%">
                  <Fit.TryTagless scroll maxHeight="400px">
                    <Gap size="20px">
                      {title && <Font fill="base" weight="700">{title}</Font>}
                      {title && text && <Gap size="8px" />}
                      {text && <Font fill="faint" size="xs">{text}</Font>}
                      {children && (<>
                        <Gap size="8px" />
                        <Font fill="base">
                        {opened ? children : (
                          <Link label={moreLabel} onClick={() => setOpened(true)} />
                        )}
                        </Font>
                      </>)}
                    </Gap>
                  </Fit.TryTagless>

                  <Fit stick="top-right">
                    <Gap>
                      <ActionButton onClick={handleClose} icon="cross_circled" />
                    </Gap>
                  </Fit>
                </Box>
              </Fit.TryTagless>

            </Gap>
          </Align.TryTagless>
        </Fit.TryTagless>
      </Animate.TryTagless>
    </Portal>
  )
}
