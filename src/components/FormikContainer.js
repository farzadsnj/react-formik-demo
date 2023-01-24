import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropDownOptions = [
    { key: "select an option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];
  const checkBoxOptions = [
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];
  const initialValues = {
    input: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkBoxOption: [],
    birthDate: null,
  };
  const validationSchema = yup.object({
    input: yup.string().required("required"),
    email: yup.string().required("required"),
    description: yup.string().required("required"),
    selectOption: yup.string().required("required"),
    radioOption: yup.string().required("required"),
    checkBoxOption: yup.array().required("required"),
    birthDate: yup.date().required("required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log('saved data', JSON.parse(JSON.stringify(values)))
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="input"
            label="input"
            name="input"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="select a topic"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="checkbox topic"
            name="checkBoxOption"
            options={checkBoxOptions}
          />
          <FormikControl
          control="date"
          label="pick a date"
          name="birthDate" 
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
