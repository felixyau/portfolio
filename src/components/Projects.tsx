import {
  Box,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { Project } from "./Project";

export const Projects: React.FC = () => {
  const useStyles = makeStyles({
    card: {
      width: 320,
      transition: "opacity 0.5s",
      zIndex: 2,
      "&:hover": {
        opacity: 0,
      },
    },
    hoverText: {
      position: "absolute",
      top: 280,
      opacity: 0,
      transition: "opacity 0.5s",
      zIndex: 2,
      // "&:hover": {
      //   opacity: 1,
      // },
    },
    container: {
      backgroundColor: "#fafafa",
      "&:hover": {
        opacity: 1,
      },
    },
  });
  const classes = useStyles();
  return (
    <Grid container item xs={10}>
      <Box mt={10} style={{ width: "100%" }}>
        <Grid
          container
          item
          xs={12}
          justifyContent="space-between"
          style={{ width: "100%" }}
        >
          <Project
            imgUrl="../../video-player.jpg"
            hoverTxt="YouTube Mod"
            url="https://stupefied-hamilton-3b9146.netlify.app/"
          ></Project>
          <Project
            justify="center"
            imgUrl="../../social-medias.jpg"
            hoverTxt="Instagram Clone"
            url="https://redditclone-seven.vercel.app/"
          ></Project>
          <Project
            url=""
            justify="flex-end"
            imgUrl="../../matrix.png"
            hoverTxt="Text-based RPG"
          ></Project>
        </Grid>
      </Box>
    </Grid>
  );
};
