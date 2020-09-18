import React from "react";
import globalform from "../../../../public/assets/words/globalform.docx";
import cfdform from "../../../../public/assets/words/cfdform.docx";
import indform from "../../../../public/assets/words/indivdform.docx";

// import { List, ListItem, ListItemText } from "@material-ui/core/";

export const FormSuccess = (formikProps) => {
  const { firstName, lastName, email, mobile, account } = formikProps.values;

  let urllink = "";
  // if (account === "Corporate") {
  //   urllink =
  //     "https://www.cognitoforms.com/BPIFinancial1/AccountOpeningCorporateV228Sep1820181101";
  // } else if (account === "Individual") {
  //   urllink =
  //     "https://www.cognitoforms.com/BPIFinancial1/AccountOpeningIndividualV228Sep1820181101";
  // } else {
  //   urllink = "TBC";
  // }

  if (account === "Corporate") {
    urllink = globalform;
  } else if (account === "Individual") {
    urllink = indform;
  } else if (account === "Corporate CFD") {
    urllink = cfdform;
  } else {
    urllink = "TBC";
  }

  return (
    <>
      <br />
      {/* <div style={{ width: "60%" }}>
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
          would like to speak to a sales personnel
        </p> */}
      <div style={{ width: "60%" }}>
        <p style={{ textAlign: "center" }}>
          Thank you {firstName} {lastName} for your interest in opening an{" "}
          {account} account with us!
        </p>
        {/* <p style={{ textAlign: "center" }}>
          Please click on this{" "}
          <a
            href={urllink}
            style={{
              color: "#9e1e16",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Redirect Link
          </a>{" "}
          to be redirected to a secure page to complete the onboarding form
        </p> */}
        <p style={{ textAlign: "center" }}>
          Please click on this{" "}
          <a
            href={urllink}
            style={{
              color: "#9e1e16",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            <i className="fa fa-file-word-o" /> Download Link
          </a>{" "}
          to download the onboarding form
        </p>
        <p style={{ textAlign: "center" }}>
          Do feel free to contact us if you require any assistance or if you
          would like to speak to a sales personnel
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
