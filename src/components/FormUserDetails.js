import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF9432",
    },
    secondary: {
      main: "#FFFFFF",
    },
    white: {
      main: "#1E1E1E",
    },
  },
});

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {/* Passing through a DOM with Fragment */}
        <React.Fragment>
          <Container maxWidth="xl" style={{ paddingTop: 100 }}>
            <Grid item xs={12} md={4} lg={4}>
              <Typography variant="h4">
                <b>Who should we deliver the salad to?</b>
              </Typography>
              {/* Whenever input text, onChange firing off an event */}
              <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <TextField
                placeholder="Enter Your Phone Number"
                label="Phone Number"
                onChange={handleChange("phoneNumber")}
                defaultValue={values.phoneNumber}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <br />
              <Button
                label="Continue"
                primary={true}
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Continue
              </Button>
            </Grid>
            <Grid item xs={8}></Grid>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
