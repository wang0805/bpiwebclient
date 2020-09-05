import React from "react";
// import { List, ListItem, ListItemText } from "@material-ui/core/";

export const FormSuccess = (formikProps) => {
  const { firstName, lastName, email, mobile, account } = formikProps.values;

  return (
    <>
      <br />
      <div style={{ width: "60%" }}>
        <p style={{ textAlign: "center" }}>
          Thank you {firstName} {lastName} for your interest in opening an{" "}
          {account} account with us!
        </p>
        <p style={{ textAlign: "center" }}>
          Please go to your inbox where you should receive a link to fill up the
          account opening form securely online
        </p>
        <p style={{ textAlign: "center" }}>
          Do feel free to contact us if you require any assistance or if you
          want to speak to a sales staff
        </p>
        {/* <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mobile" secondary={mobile} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Account" secondary={account} />
          </ListItem>
        </List> */}
      </div>
    </>
  );
};
