import React from "react";
import { Field } from "formik";
// import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export const FormSecondStep = (formikProps) => {
  return (
    <React.Fragment>
      <br />
      <p style={{ width: "80%", textAlign: "center" }}>
        Please Specify the Type of Account*
      </p>
      <RadioGroup>
        <label>
          <Field as={Radio} name="account" value="Individual" />
          Individual Account
        </label>
        <label>
          <Field as={Radio} name="account" value="Corporate" />
          Corporate Account
        </label>
        <label>
          <Field as={Radio} name="account" value="Corporate CFD" />
          Corporate CFD Account
        </label>
        <label>
          <Field as={Radio} name="account" value="IDB" />
          IDB Account
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
