import React, { FC, useState } from 'react'
import { Font, Box, Align, Gap, Fit, Animate, Icon } from 'themeor'
import { MakeButton } from '../make-button'


export interface NoticeProps {
  title?: string
  text?: string
  type?: 'base' | 'critic' | 'warning'
  onClose?: any
}


export const Notice: FC<NoticeProps> = ({ title, text, type = 'base', onClose, children }) => {
  const [show, setShow] = useState(true)

  function handleClose() {
    setShow(false)
    setTimeout(() => onClose?.(), 3000)
  }

  return (
    <Animate
      mounted={show}
      onMount="backInDown"
      onUnmount="backOutUp"
    >
      <Fit.TryTagless cover="screen" stick="top" width="100%" clip>
        <Align.TryTagless hor="center">
          <Box.TryTagless strong fill={type}>
            <Gap>
              {title && <Font weight="700">{title}</Font>}
              {text && <Font>{text}</Font>}

              <Fit stick="top-right">
                <MakeButton onClick={handleClose}>
                  <Gap>
                    <Icon name="delete_disabled" />
                  </Gap>
                </MakeButton>
              </Fit>
            </Gap>
          </Box.TryTagless>
        </Align.TryTagless>
      </Fit.TryTagless>
    </Animate>
  )
}
