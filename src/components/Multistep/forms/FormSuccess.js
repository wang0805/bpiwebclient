import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";

export const FormSuccess = (formikProps) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    city,
    state,
  } = formikProps.values;

  return (
    <>
      <div>
        <List>
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
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="State" secondary={state} />
          </ListItem>
        </List>
      </div>
    </>
  );
};
