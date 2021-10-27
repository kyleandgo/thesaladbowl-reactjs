import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

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

class Banner extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="bg">
          <div className="banner">
            <Container maxWidth="xl" style={{ paddingTop: 200 }}>
              <Grid item xs={12} md={4} lg={4}>
                <Typography variant="h2" color="secondary">
                  <b>Make them feel your love today.</b>
                </Typography>
                <br></br>
                <Typography variant="h6" color="secondary" gutterBottom>
                  Share the gift of healthy eating with your loved ones.
                  Starting at $7.90.
                </Typography>
                <br></br>
                <Button
                  label="Continue"
                  primary={true}
                  color="primary"
                  variant="contained"
                  href="/order"
                >
                  Order now
                </Button>{" "}
              </Grid>
            </Container>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Banner;
