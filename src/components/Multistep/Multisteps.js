import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Formik, Form } from "formik";
import { FormFirstStep } from "./forms/FormFirstStep";
import { FormSecondStep } from "./forms/FormSecondStep";
import { FormSuccess } from "./forms/FormSuccess";

const StyledButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#9e1e16",
    "&:hover": {
      backgroundColor: "black",
    },
    fontSize: "14px",
    padding: "10px 40px",

    borderRadius: 0,
    lineHeight: 2,
  },
  disabled: { color: "Grey", backgroundColor: "#e4e4e4" },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    // color: "#f0542e",
    color: "#9e1e16",
    "&$activeIcon": {
      color: "#9e1e16",
    },
    "&$completedIcon": {
      color: "#9e1e16",
    },
  },
  activeIcon: {},
  completedIcon: {},
}));

function getSteps() {
  return ["Personal Particulars", "Account Type", "Completion"];
}

export default function MultiStep() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const formData = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    account: "",
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      console.log("send email at 1!");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStep = (step, values, errors, touched) => {
    switch (step) {
      case 0:
        return <FormFirstStep errors={errors} touched={touched} />;
      case 1:
        return <FormSecondStep errors={errors} touched={touched} />;
      case 2:
        return <FormSuccess values={values} />;
      default:
        return <FormFirstStep errors={errors} touched={touched} />;
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Your First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Your Last name is required";
    }

    if (!values.mobile) {
      errors.mobile = "Your Mobile number is required";
    }

    if (!values.email) {
      errors.email = "Your Email is required";
    }

    return errors;
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                classes: {
                  root: classes.icon,
                  active: classes.activeIcon,
                  completed: classes.completedIcon,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div className={classes.form}>
            <br />
            <Typography className={classes.instructions}>
              Thank you for your submission!
            </Typography>
            <div style={{ paddingTop: "50px" }}>
              <StyledButton onClick={handleReset}>Start Again</StyledButton>
            </div>
          </div>
        ) : (
          <Formik
            enableReinitialize
            initialValues={{ ...formData }}
            onSubmit={handleNext}
            validate={validate}
          >
            {({ values, errors, touched }) => (
              <Form className={classes.form}>
                {renderStep(activeStep, values, errors, touched)}
                <div style={{ paddingTop: "50px" }}>
                  <StyledButton
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    BACK
                  </StyledButton>

                  <StyledButton variant="contained" type="submit">
                    {activeStep === steps.length - 1 ? "FINISH" : "NEXT"}
                  </StyledButton>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
