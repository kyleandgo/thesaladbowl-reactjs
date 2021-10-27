import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
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

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values: {
        chooseSize,
        chooseGreens,
        chooseProtein,
        chooseSauce,
        firstName,
        lastName,
        phoneNumber,
        email,
        blockNumber,
        streetName,
        unitNumber,
        postalCode,
      },
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {/* Passing through a DOM with Fragment */}
        <React.Fragment>
          <Container maxWidth="xl" style={{ paddingTop: 100 }}>
            <Grid item xs={12} md={4} lg={4}>
              <Typography variant="h4">
                <b>Confirm your salad order?</b>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Choose your bowl"
                    secondary={chooseSize}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Choose your greens"
                    secondary={chooseGreens}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Choose your protein"
                    secondary={chooseProtein}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Choose your sauce"
                    secondary={chooseSauce}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="First Name" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Phone Number"
                    secondary={phoneNumber}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Block Number"
                    secondary={blockNumber}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Street Name" secondary={streetName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Unit Number" secondary={unitNumber} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Postal Code" secondary={postalCode} />
                </ListItem>
              </List>
              <br />
              <Button
                label="Confirm"
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

export default Confirm;
