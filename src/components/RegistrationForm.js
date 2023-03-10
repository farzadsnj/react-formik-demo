import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FormikControl from './FormikControl'

function RegistrationForm () {
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' }
  ]
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: ''
  }

  const validationSchema = yup.object({
    email: yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: yup.string().required('Required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
    modeOfContact: yup.string().required('Required'),
    phone: yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: yup.string().required('Required')
    })
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
            <FormikControl
              control='radio'
              label='Mode of contact'
              name='modeOfContact'
              options={options}
            />
            <FormikControl
              control='input'
              type='text'
              label='Phone number'
              name='phone'
            />
            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm