import React from "react";

import TextField from "@material-ui/core/TextField";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
const UserDetails = ({ nextStep, data, fun }) => {
  let { email, userName, password, firstName, lastName, country } = data;
  let {
    setEmail,
    setUserName,
    setPassword,
    setFirstName,
    setLastName,
    setCountry,
  } = fun;

  const handleChangeforEmial = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeforUserName = (e) => {
    setUserName(e.target.value);
  };

  const Continue = (e) => {
    console.log(email, userName, password, firstName, lastName, country);
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleChangeforEmial}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="UserName"
              variant="outlined"
              value={userName}
              onChange={handleChangeforUserName}
            />
          </Grid>

          <Button onClick={Continue} variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

export default UserDetails;
