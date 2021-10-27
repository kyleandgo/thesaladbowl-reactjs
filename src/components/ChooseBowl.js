import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import jumboBowl from "../img/jumbo-bowl.jpg";
import mediumBowl from "../img/medium-bowl.jpg";
import littleBowl from "../img/little-bowl.jpg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF9432",
    },
    secondary: {
      main: "#FFF",
    },
  },
});

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(0),
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(6),
  },
  paper: {
    textAlign: "left",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
  },
});

export class ChooseBowl extends Component {
  continue = (e) => {
    e.preventDefault(); // to cancels the event if it is cancelable
    this.props.nextStep(); // to call props from Order.js
  };

  render() {
    const { values, handleChange, classes } = this.props; // pull values from props with destrucuturing
    return (
      <MuiThemeProvider theme={theme}>
        {/* Passing through a DOM with Fragment */}
        <React.Fragment>
          <Container maxWidth="xl" style={{ paddingTop: 100 }}>
            <Typography variant="h4">
              <b>Make your salad bowl:</b>
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{ paddingTop: 16 }}>
                Choose your bowl
              </FormLabel>
              <RadioGroup
                name="chooseBowl"
                defaultValue={values.chooseSize}
                onChange={handleChange}
                style={{ paddingTop: 16 }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={4}>
                    <Paper className={classes.paper} elevation={0}>
                      <img
                        src={jumboBowl}
                        className="jumboBowl"
                        alt="jumboBowl"
                      />
                    </Paper>
                    <FormControlLabel
                      value="jumboBowl"
                      control={<Radio />}
                      label="Jumbo bowl - $11.90"
                      style={{ paddingTop: 8 }}
                      defaultValue={values.jumboBowl}
                    />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Paper className={classes.paper} elevation={0}>
                      <img
                        src={mediumBowl}
                        className="mediumBowl"
                        alt="mediumBowl"
                      />
                    </Paper>
                    <FormControlLabel
                      value="mediumBowl"
                      control={<Radio />}
                      label="Medium bowl - $9.90"
                      style={{ paddingTop: 8 }}
                      defaultValue={values.mediumBowl}
                    />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Paper className={classes.paper} elevation={0}>
                      <img
                        src={littleBowl}
                        className="littleBowl"
                        alt="littleBowl"
                      />
                    </Paper>
                    <FormControlLabel
                      value="littleBowl"
                      control={<Radio />}
                      label="Little bowl - $7.90"
                      style={{ paddingTop: 8 }}
                      defaultValue={values.littleBowl}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
            <br /> <br /> {/* Whenever onClick, calls for continue */}
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
            <Grid item xs={8} style={{ paddingBottom: 40 }}></Grid>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(useStyles)(ChooseBowl); // pull styles with destrucuturing
