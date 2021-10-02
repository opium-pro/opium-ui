import React, { FC, useState } from 'react'
import { Font, Box, Align, Gap, Fit, Animate, Icon } from 'themeor'
import { MakeButton } from '../make-button'
import { Portal } from '../portal'


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
    <Portal>
      <Animate.TryTagless
        mounted={show}
        onMount="slideInDown"
        onUnmount="slideOutUp"
      >
        <Fit.TryTagless
          fixed
          left="0"
          top="0"
          width="100%"
          maxWidth="100%"
          clip
          zIndex={1000}
        >
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
      </Animate.TryTagless>
    </Portal>
  )
}
