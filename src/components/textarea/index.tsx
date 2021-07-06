import { forwardRef } from 'react'
import { Gap, Box, Align, Font, Icon, Fit, Reaction, Effect } from 'themeor'
import newId from 'themeor/dist/utils/new-id'
import {TextInput} from '../text-input'


export const TextArea = forwardRef(({ ...props }: any, ref) => {
  return (
    <TextInput
      {...props}
      type="textarea"
      height="114px"
      ref={ref}
    />
  )
})