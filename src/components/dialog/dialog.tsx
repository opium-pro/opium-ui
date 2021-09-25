import React, { useState } from 'react'
import { Modal } from '../modal'
import { Button } from '../button'
import { Gap } from 'themeor'

export function Dialog({onOk, onCancel, ...rest}) {
  const [mount, setMount] = useState(true)

  function handleOk() {
    setMount(false)
    onOk()
  }

  function handleCancel() {
    setMount(false)
    onCancel()
  }

  return (
    <Modal
      {...rest}
      width="500px"
      mounted={mount}
      footer={(<>
        <Button stretch primary label="Yes" onClick={handleOk} />
        <Gap />
        <Button stretch label="No" onClick={handleCancel} />
      </>)}
    />
  )
}