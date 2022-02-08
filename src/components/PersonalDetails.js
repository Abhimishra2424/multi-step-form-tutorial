import { Button } from "@material-ui/core";
import React from "react";

const PersonalDetails = ({ nextStep, data, fun, prevStep }) => {
  let { email, userName, password, firstName, lastName, country } = data;
  let {
    setEmail,
    setUserName,
    setPassword,
    setFirstName,
    setLastName,
    setCountry,
  } = fun;

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <Button onClick={Previous} variant="contained" color="primary">
        Previous
      </Button>
      <Button onClick={nextStep} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
};

export default PersonalDetails;
