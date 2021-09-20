import React from 'react'
import { withForm } from '../form'

export const FilePicker = withForm(({ onChange, name }) => 
  <input onChange={(e) => onChange(e.target.files[0])} type="file" name={name} />)