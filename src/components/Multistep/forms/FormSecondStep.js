import React from "react";
import { Field } from "formik";
// import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export const FormSecondStep = (formikProps) => {
  return (
    <React.Fragment>
      <br />
      <p style={{ textAlign: "center" }}>
        Please specify if you are opening an individual account or corporate
        account
      </p>
      <RadioGroup>
        <label>
          <Field as={Radio} name="account" value="Individual" />
          Opening Individual Account
        </label>
        <label>
          <Field as={Radio} name="account" value="Corporate" />
          Opening Corporate Account
        </label>
        <label>
          <Field as={Radio} name="account" value="Corporate CFD" />
          Opening Corporate CFD Account
        </label>
      </RadioGroup>
    </React.Fragment>
  );
};

// <label>
//   <Field type="radio" name="picked" value="One" />
//   One
// </label>
// <label>
//   <Field type="radio" name="picked" value="Two" />
//   Two
// </label>
