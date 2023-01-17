import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "farzad",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  let errs = {};

  if (!values.name) {
    errs.name = "Required";
  }

  if (!values.email) {
    errs.name = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errs.email = "invalid email format";
  }

  if (!values.channel) {
    errs.name = "Required";
  }
  return errs;
};

const YoutubeFrom = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("visited fields", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default YoutubeFrom;
