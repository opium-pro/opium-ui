import React, { FC, useEffect, useState } from 'react'
import { Font, Box, Align, Gap, Animate, Fit, FitProps } from 'themeor'
import { Cover } from '../cover'
import { IconButton } from '../icon-button'


export type ModalProps = FitProps & {
  onClose?: () => boolean
  title?: string
  text?: string
  onCancel?: string
  footer?: any
  mounted?: any
}


export const Modal: FC<ModalProps> = ({
  children,
  title,
  text,
  onClose,
  footer,
  mounted: initialMounted = true,
  ...rest
}) => {
  const [mounted, setMounted] = useState(true)


  useEffect(() => {
    if (initialMounted) {
      !mounted && setMounted(true)
    } else {
      mounted && setMounted(false)
    }
  }, [initialMounted])


  function handleClose() {
    setMounted(false)
    if (onClose?.() === false) {
      setTimeout(() => setMounted(true), 600)
    }
  }

  return (
    <Animate.TryTagless
      onMount="fadeIn"
      onUnmount="fadeOut"
      duration={500}
      mounted={mounted}
    >
      <Cover>
        <Animate.TryTagless
          onMount="slideInUp"
          onUnmount="fadeOutDown"
          mounted={mounted}
        >
          <Fit.TryTagless>
            <Gap size="16px">
              <Fit.TryTagless maxHeight="calc(100vh - 32px)" minHeight="40px" minWidth="200px" scroll {...rest}>
                <Box radius="md" fill="base" shadow="lg">
                  <Gap vert="24px" hor="32px">
                    {!!title && (<>
                      <Font weight="700" size="x2l">
                        {title}
                      </Font>
                    </>)}
                    {!!title && !!text && <Gap size="8px" />}
                    {!!text && (<>
                      <Font weight="400" size="md">
                        {text}
                      </Font>
                    </>)}

                    {(!!text || !!title) && !!children && <Gap size="8px" />}

                    {children}
                  </Gap>

                  {!!footer && (
                    <Fit bottom="0" sticky>
                      <Box.TryTagless>
                        <Gap.TryTagless hor="32px" vert="16px">
                          <Align row>
                            {footer}
                          </Align>
                        </Gap.TryTagless>
                      </Box.TryTagless>
                    </Fit>
                  )}
                </Box>
              </Fit.TryTagless>

              {onClose && (
                <Fit
                  cover="parent"
                  stick="top-right"
                  right="30px"
                  top="30px"
                >
                  <IconButton
                    onClick={handleClose}
                    name="cross"
                    fill="faint"
                  />
                </Fit>
              )}
            </Gap>
          </Fit.TryTagless>
        </Animate.TryTagless>
      </Cover>
    </Animate.TryTagless>
  )
}
