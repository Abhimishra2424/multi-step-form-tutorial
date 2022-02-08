import React, { useState } from "react";
import Confirmation from "./Confirmation";
import PersonalDetails from "./PersonalDetails";
import UserDetails from "./UserDetails";
import Success from "./Success";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");

  let fun = {
    setEmail,
    setUserName,
    setPassword,
    setFirstName,
    setLastName,
    setCountry,
  };

  let data = {
    email,
    userName,
    password,
    firstName,
    lastName,
    country,
  };

  // go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // go to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // render different components depending on step

  switch (step) {
    case 1:
      return <UserDetails nextStep={nextStep} data={data} fun={fun} />;
    case 2:
      return (
        <PersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          data={data}
          fun={fun}
        />
      );
    case 3:
      return (
        <Confirmation
          prevStep={prevStep}
          nextStep={nextStep}
          data={data}
          fun={fun}
        />
      );
    case 4:
      return <Success />;
    // never forget the default case, otherwise VS code would be mad!
    default:
    // do nothing
  }
};

export default Signup;
