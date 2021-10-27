import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
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
export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Container maxWidth="xl" style={{ paddingTop: 100 }}>
            <Grid item xs={12} md={4} lg={4}>
              <Typography variant="h4">
                <b>Thank you for your order. </b>
              </Typography>
              <br />
              <Typography variant="body1">
                Your order was completed successfully. An email receipt
                including the details about your order has been sent to the
                email address provided.
              </Typography>
            </Grid>
            <Grid item xs={8}></Grid>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
