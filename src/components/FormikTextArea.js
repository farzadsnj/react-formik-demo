import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError2 from './TextError2'

const FormikTextArea = (props) => {
    const {label, name, ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError2}/>
    </div>
  )
}

export default FormikTextArea