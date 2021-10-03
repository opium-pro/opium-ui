import React from 'react'
import { withForm } from '../form'

export const ImagePicker = withForm(({
  value,
  name,
  onChange,
}) => 
  <input onChange={(e) => onChange(e.target.files[0])} type="file" name={name} />)