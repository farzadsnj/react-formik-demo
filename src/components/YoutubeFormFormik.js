import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "farzad",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const userSchema = yup.object().shape({
  name: yup.string().required("Required!"),
  email: yup.string().email("Invalid email format").required("Required"),
  channel: yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
};

const YoutubeFormFormik = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        console.log('formik props', formik)
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className="form-control">
              <label htmlFor="email">email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="channel">channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="youtube channel"
              />
              <ErrorMessage name="channel">
                {(errMsg) => <div className="error">{errMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="comments">comments</label>
              <FastField
                as="textarea"
                type="text"
                id="comments"
                name="comments"
                placeholder="youtube comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">address</label>
              <Field name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  console.log("render props", props);
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">twitter</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="phoneOne">phoneOne</label>
              <Field type="text" id="phoneOne" name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="phoneTwo">phoneTwo</label>
              <Field type="text" id="phoneTwo" name="phoneNumbers[1]" />
            </div>

            <div className="form-control">
              <label>list of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  console.log("fieldArrayProps", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  console.log("form error", form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              {" "}
                              -{" "}
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            {" "}
                            +{" "}
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button type="button" onClick={()=> formik.validateField('comments')}>validate comments</button>
            <button type="button" onClick={()=> formik.validateField()}>validate all</button>
            <button type="button" onClick={()=> formik.setFieldTouched('comments')}>visit comments</button>
            <button type="button" onClick={()=> formik.setTouched({
              name: true,
              email: true,
              channel: true,
              comments: true
            })}>visit fields</button>
            <button type="submit">submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeFormFormik;
