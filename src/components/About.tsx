import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import google from "../../google.jpg";

export const About = () => {
  useEffect(()=>{
    const newGoogle = new Image();
    newGoogle.src = google;
  })
  return (
    <Grid container direction="column">
      <Grid container item justifyContent="center">
        <Box width=" 500px">
        <Typography variant="h5" align="center">
          Hi, I'm a web developer, typescript passionate, and full time google
          searcher
        </Typography>
        </Box>
      </Grid>
      <Grid container item justifyContent="center">
        <Box width="600px" mt={5}>
          <img
            style={{ width: "100%", objectFit: "cover" }}
            src={google}
          ></img>
        </Box>
      </Grid>
    </Grid>
  );
};
