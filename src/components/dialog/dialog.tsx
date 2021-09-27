import React, { FC, useState } from 'react'
import { Modal, ModalProps } from '../modal'
import { Button } from '../button'
import { Gap } from 'themeor'
import { Hotkey } from '../hotkey'

export type DialogProps = ModalProps & {
  onApply?: any
  applyLabel?: string
  cancelLabel?: string
  onCancel?: any
}

export const Dialog: FC<DialogProps> = ({
  onApply,
  applyLabel = 'Yes',
  cancelLabel = 'No',
  onCancel,
  ...rest
}) => {
  const [mount, setMount] = useState(true)

  function handleApply() {
    setMount(false)
    onApply instanceof Function && onApply()
  }

  function handleCancel() {
    setMount(false)
    onCancel instanceof Function && onCancel()
  }

  return (
    <Modal
      width="500px"
      mounted={mount}
      footer={(<>
        {onApply && (
          <Button stretch primary label={applyLabel} onClick={handleApply}>
            <Gap />
            <Hotkey trigger="enter,y" action={handleApply} />
          </Button>
        )}
        {onApply && onCancel && <Gap />}
        {onCancel && (
          <Button stretch label={cancelLabel} onClick={handleCancel}>
            <Gap />
            <Hotkey trigger="n" action={handleCancel} />
          </Button>
        )}
      </>)}
      {...rest}
    />
  )
}