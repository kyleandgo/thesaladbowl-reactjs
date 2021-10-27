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
  },
});

export class FormPersonalDetails extends Component {
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
                <b>Where should we deliver your salad to?</b>
              </Typography>
              <TextField
                placeholder="Enter Your Block Number"
                label="Block Number"
                onChange={handleChange("blockNumber")}
                defaultValue={values.blockNumber}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <TextField
                placeholder="Enter Your Street Name"
                label="Street Name"
                onChange={handleChange("streetName")}
                defaultValue={values.streetName}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <TextField
                placeholder="Enter Your Unit Number"
                label="Unit Number"
                onChange={handleChange("unitNumber")}
                defaultValue={values.unitNumber}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <TextField
                placeholder="Enter Your Postal Code"
                label="Postal Code"
                onChange={handleChange("postalCode")}
                defaultValue={values.postalCode}
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

export default FormPersonalDetails;
