import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
  },
}));

export default function ChooseIngredients(props) {
  const classes = useStyles();
  // Calling inside a functional component to store multiple values
  const [state, setState] = React.useState({
    chickenBreast: true,
    chickenThigh: false,
    tofu: false,
    ribeyeSteak: false,
    salmonFillet: false,
    carrot: false,
    cherryTomatoes: false,
    cucumber: false,
    edamame: false,
    radish: false,
    wasabiShoyu: false,
    classicSauce: false,
    spicyMayo: false,
    sesameSauce: false,
    honeyMustard: false,
  });

  // Handle fields change whenever box checked
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // Passing through mentioned values through state\
  const {
    chickenBreast,
    chickenThigh,
    tofu,
    ribeyeSteak,
    salmonFillet,
    carrot,
    cherryTomatoes,
    cucumber,
    edamame,
    radish,
    wasabiShoyu,
    classicSauce,
    spicyMayo,
    sesameSauce,
    honeyMustard,
  } = state;

  // Check to make sure error occurs when mentioned values of maximum 2 checboxes
  const bowlError =
    [chickenBreast, chickenThigh, tofu, ribeyeSteak, salmonFillet].filter(
      (v) => v
    ).length !== 2;

  const vegetableError =
    [carrot, cherryTomatoes, cucumber, edamame, radish].filter((v) => v)
      .length !== 2;

  const sauceError =
    [wasabiShoyu, classicSauce, spicyMayo, sesameSauce, honeyMustard].filter(
      (v) => v
    ).length !== 2;

  const nextStep = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  return (
    <MuiThemeProvider theme={theme}>
      {/* Passing through a DOM with Fragment */}
      <React.Fragment>
        <Container maxWidth="xl" style={{ paddingTop: 100 }}>
          <Typography variant="h4">
            <b>Make your salad bowl:</b>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                className={classes.paper}
                elevation={0}
                style={{ paddingTop: 40 }}
              >
                <FormControl
                  required
                  error={bowlError}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Choose your protein</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={chickenBreast}
                          onChange={handleChange}
                          name="chickenBreast"
                        />
                      }
                      label="Chicken breast"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={chickenThigh}
                          onChange={handleChange}
                          name="chickenThigh"
                        />
                      }
                      label="Chicken Thigh"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={tofu}
                          onChange={handleChange}
                          name="tofu"
                        />
                      }
                      label="Tofu"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ribeyeSteak}
                          onChange={handleChange}
                          name="ribeyeSteak"
                        />
                      }
                      label="Ribeye steak"
                    />{" "}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={salmonFillet}
                          onChange={handleChange}
                          name="salmonFillet"
                        />
                      }
                      label="Salmon Fillet"
                    />
                  </FormGroup>
                  <FormHelperText>Pick maximum 2</FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                className={classes.paper}
                elevation={0}
                style={{ paddingTop: 40 }}
              >
                <FormControl
                  required
                  error={sauceError}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Choose your protein</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={wasabiShoyu}
                          onChange={handleChange}
                          name="wasabiShoyu"
                        />
                      }
                      label="Wasabi shoyu"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={classicSauce}
                          onChange={handleChange}
                          name="classicSauce"
                        />
                      }
                      label="Classic sauce"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={spicyMayo}
                          onChange={handleChange}
                          name="spicyMayo"
                        />
                      }
                      label="Spicy mayo"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={sesameSauce}
                          onChange={handleChange}
                          name="sesameSauce"
                        />
                      }
                      label="Sesame sauce"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={honeyMustard}
                          onChange={handleChange}
                          name="honeyMustard"
                        />
                      }
                      label="Honey mustard"
                      style={{ paddingTop: 8 }}
                    />
                  </FormGroup>
                  <FormHelperText>Pick maximum 2</FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                className={classes.paper}
                elevation={0}
                style={{ paddingTop: 40 }}
              >
                <FormControl
                  required
                  error={vegetableError}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">
                    Choose your vegetable
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={carrot}
                          onChange={handleChange}
                          name="carrot"
                        />
                      }
                      label="Carrot"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={cherryTomatoes}
                          onChange={handleChange}
                          name="cherryTomatoes"
                        />
                      }
                      label="Cherry tomatoes"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={cucumber}
                          onChange={handleChange}
                          name="cucumber"
                        />
                      }
                      label="Cucumber"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={edamame}
                          onChange={handleChange}
                          name="edamame"
                        />
                      }
                      label="Edamame"
                      style={{ paddingTop: 8 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={radish}
                          onChange={handleChange}
                          name="radish"
                        />
                      }
                      label="Radish"
                      style={{ paddingTop: 8 }}
                    />
                  </FormGroup>
                  <FormHelperText>Pick maximum 2</FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Button
              label="Continue"
              primary={true}
              color="primary"
              variant="contained"
              onClick={(e) => props.nextStep()}
            >
              Continue
            </Button>
          </Grid>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
