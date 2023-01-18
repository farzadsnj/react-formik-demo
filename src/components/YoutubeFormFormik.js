import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "farzad",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const userSchema = yup.object().shape({
  name: yup.string().required("Required!"),
  email: yup.string().email("Invalid email format").required("Required"),
  channel: yup.string().required("Required"),
});

const YoutubeFormFormik = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name"/>
        </div>

        <div className="form-control">
          <label htmlFor="email">email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">channel</label>
          <Field type="text" id="channel" name="channel" placeholder='youtube channel'/>
          <ErrorMessage name="channel" />
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeFormFormik;
