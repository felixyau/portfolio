import React, { useState } from "react";
import {
  Box,
  BoxProps,
  Button,
  Color,
  Grid,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./components/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Box mt={6}>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={1}></Grid>
          <Navbar />
          <Grid item xs={1}></Grid>
        </Grid>
          <Switch>
            <Route path="/about">
              <Box mt={10}>
              <About/>
              </Box>
            </Route>
            <Route path="/">
              <Grid item container>
                <Grid item xs={1}></Grid>
                <Projects />
                <Grid item xs={1}></Grid>
              </Grid>
            </Route>
          </Switch>
      </Grid>
    </Box>
    </BrowserRouter>
  );
};

export default App;
