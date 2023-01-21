import React from 'react'
import {Formik, Form} from 'formik'
import * as yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
    const initialValues = {
        email:'',
        description: ''
    }
    const validationSchema = yup.object({
        email: yup.string().required('required'),
        description: yup.string().required('required'),
    })
    const onSubmit = values => console.log('Form data', values)
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik =>(
                <Form>
                    <FormikControl control='input' type='email' label='Email' name='email' />
                    <FormikControl control='textarea' label='Description' name='description' />
                    <button type='submit'>Submit</button>
                </Form>
            )
        }
    </Formik>
  )
}

export default FormikContainer