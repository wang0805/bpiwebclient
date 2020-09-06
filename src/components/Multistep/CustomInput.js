import TextField from "@material-ui/core/TextField";
import React from "react";

const CustomInput = (props) => (
  // <TextField style={{ width: "50%" }} {...props} />
  <TextField fullWidth {...props} />
);

export default CustomInput;
