import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

export const About = () => {
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
            src="https://www.semicolonworld.com/uploads/memes/gmOAZ1nNYV.jpg"
          ></img>
        </Box>
      </Grid>
    </Grid>
  );
};
