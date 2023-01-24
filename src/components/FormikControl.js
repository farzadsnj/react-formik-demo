import React from "react";
import ChakraInput from "./ChakraInput";
import CheckBox from "./CheckBox";
import DatePicker from "./DatePicker";
import FormikTextArea from "./FormikTextArea";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Select from "./Select";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <FormikTextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />
    case "checkbox":
      return <CheckBox {...rest} />
    case "date":
      return <DatePicker {...rest} />
    case 'chakrainput' :
      return <ChakraInput {...rest} /> 
    default:
      return null;
  }
};

export default FormikControl;
