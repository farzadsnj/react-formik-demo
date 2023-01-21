import React from "react";
import FormikTextArea from "./FormikTextArea";
import Input from './Input'

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input": return <Input {...rest} />
    case "textarea": return <FormikTextArea {...rest} />
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
