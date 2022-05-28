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
  critic?: boolean
  hold?: number
}

export const Dialog: FC<DialogProps> = ({
  onApply,
  applyLabel = 'Yes',
  cancelLabel = 'No',
  onCancel,
  critic,
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
          <Button critic={critic} stretch primary label={applyLabel} onClick={handleApply} />
        )}
        {onApply && onCancel && <Gap right="md" />}
        {onCancel && (
          <Button stretch label={cancelLabel} onClick={handleCancel} />
        )}
      </>)}
      {...rest}
    />
  )
}