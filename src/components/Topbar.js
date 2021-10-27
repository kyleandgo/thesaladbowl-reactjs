import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
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

function Topbar() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h5" style={{ paddingRight: 20 }}>
              <Link
                href="/"
                color="secondary"
                style={{ textDecoration: "none" }}
              >
                <b>the salad bowl </b>
              </Link>
            </Typography>
            <nav>
              <Link
                variant="button"
                color="secondary"
                href="#"
                style={{
                  paddingRight: 10,
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                our story
              </Link>
              <Link
                variant="button"
                color="secondary"
                href="/address"
                style={{
                  paddingRight: 10,
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                order online
              </Link>
              <Link
                variant="button"
                color="secondary"
                href="#"
                style={{
                  paddingRight: 10,
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                contact
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default Topbar;
