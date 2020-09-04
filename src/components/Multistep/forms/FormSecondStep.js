import React from "react";
import { Field } from "formik";
// import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export const FormSecondStep = (formikProps) => {
  return (
    <React.Fragment>
      <RadioGroup>
        <label>
          <Field as={Radio} name="account" value="Individual" />
          Opening Individual Account
        </label>
        <label>
          <Field as={Radio} name="account" value="Corporate" />
          Opening Corporate Account
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
