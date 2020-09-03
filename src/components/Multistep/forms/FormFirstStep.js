import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export const FormFirstStep = (formikProps) => {
  const { errors, touched } = formikProps;
  return (
    <>
      <Field
        name="firstName"
        label="First Name"
        as={TextField}
        error={touched.firstName && errors.firstName}
        helperText={touched.firstName && errors.firstName}
      />

      <Field name="lastName" label="Last Name" as={TextField} />

      <Field
        name="mobile"
        label="Mobile"
        as={TextField}
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && errors.lastName}
      />
    </>
  );
};
