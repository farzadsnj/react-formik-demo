import { Formik, Form } from "formik";
import React from "react";
import * as yup from "yup";
import FormikControl from "./FormikControl";

const LogInForm = () => {
  const initialValues = {
    // name: "",
    email: "",
    password: "",
  };

  const userSchema = yup.object({
    // name: yup.string().required("Required"),
    email: yup.string().email("invalid email").required("Required"),
    password: yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form date", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {/* <FormikControl
              control="input"
              type="input"
              label="input"
              name="input"
            /> */}
            <FormikControl
              control="chakrainput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="chakrainput"
              type="password"
              label="password"
              name="password"
            />
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
