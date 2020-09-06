import React from "react";
import { Field } from "formik";
import CustomInput from "../CustomInput";
import { Grid } from "@material-ui/core";

export const FormFirstStep = (formikProps) => {
  const { errors, touched } = formikProps;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            name="firstName"
            label="First Name*"
            as={CustomInput}
            error={touched.firstName && errors.firstName}
            helperText={touched.firstName && errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="lastName"
            label="Last Name*"
            as={CustomInput}
            error={touched.lastName && errors.lastName}
            helperText={touched.lastName && errors.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="country"
            label="Country"
            as={CustomInput}
            error={touched.mobile && errors.mobile}
            helperText={touched.mobile && errors.mobile}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="mobile"
            label="Mobile Number*"
            as={CustomInput}
            error={touched.mobile && errors.mobile}
            helperText={touched.mobile && errors.mobile}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            type="email"
            name="email"
            label="Email Address*"
            as={CustomInput}
            error={touched.email && errors.email}
            helperText={touched.email && errors.email}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
