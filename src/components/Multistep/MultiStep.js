import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Formik, Form } from "formik";
import { FormFirstStep } from "./forms/FormFirstStep";
import { FormSecondStep } from "./forms/FormSecondStep";
import { FormSuccess } from "./forms/FormSuccess";

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
}));

function getSteps() {
  return ["One", "Two", "Three"];
}

export default function Step2() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const formData = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    country: "",
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    return errors;
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
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
                <div>
                  <br />
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
