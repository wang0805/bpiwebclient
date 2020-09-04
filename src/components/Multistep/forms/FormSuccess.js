import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";

export const FormSuccess = (formikProps) => {
  const { firstName, lastName, email, mobile, account } = formikProps.values;

  return (
    <>
      <br />
      <div style={{ width: "60%" }}>
        <p style={{ textAlign: "center" }}>
          Thank you {firstName} {lastName} for your interest in opening an
          account with us!
        </p>
        <p style={{ textAlign: "center" }}>
          Please go to your inbox for opening of an {account} where you should
          receive a link to fill in the account opening form online
        </p>
        <p style={{ textAlign: "center" }}>
          Do feel free to reach us on our direct line should you face any
          problems or would like to speak to one of our sales staff, thank you
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
