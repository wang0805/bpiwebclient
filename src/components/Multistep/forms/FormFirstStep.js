import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import CustomInput from "../CustomInput";

export const FormFirstStep = (formikProps) => {
  const { errors, touched } = formikProps;
  return (
    <React.Fragment>
      <Field
        name="firstName"
        label="First Name"
        as={CustomInput}
        margin="normal"
        error={touched.firstName && errors.firstName}
        helperText={touched.firstName && errors.firstName}
      />

      <Field
        name="lastName"
        label="Last Name"
        as={CustomInput}
        margin="normal"
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && errors.lastName}
      />

      <Field
        name="mobile"
        label="Mobile"
        as={CustomInput}
        margin="normal"
        error={touched.mobile && errors.mobile}
        helperText={touched.mobile && errors.mobile}
      />

      <Field
        type="email"
        name="email"
        label="Email Address"
        as={CustomInput}
        margin="normal"
        error={touched.email && errors.email}
        helperText={touched.email && errors.email}
      />
    </React.Fragment>
  );
};
