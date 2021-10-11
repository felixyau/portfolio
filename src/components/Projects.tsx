import {
  Box,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useEffect } from "react";
import { Project } from "./Project";
import videoPlayer from "../../video-player.jpg";
import matrix from "../../matrix.png";
import socialMedia from "../../social-medias.jpg";

export const Projects: React.FC = () => {
  const images = [videoPlayer, matrix, socialMedia];
  useEffect(()=>{
    images.forEach(image=> {
      const newImage = new Image();
      newImage.src = image;
    })

  })

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
            hoverTxt="YouTube Mod"
            url="https://stupefied-hamilton-3b9146.netlify.app/"
          >
            <Box width="100%" height="100%">
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={videoPlayer}
                alt="videoPlayer"
              ></img>
            </Box>
          </Project>
          <Project
            justify="center"
            hoverTxt="Instagram Clone"
            url="https://redditclone-seven.vercel.app/"
          >
            <Box width="100%" height="100%">
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={socialMedia}
                alt="videoPlayer"
              ></img>
            </Box>
          </Project>
          <Project url="https://github.com/felixyau/coRPG" justify="flex-end" hoverTxt="Text-based RPG">
            <Box width="100%" height="100%">
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={matrix}
                alt="Matrix"
              ></img>
            </Box>
          </Project>
        </Grid>
      </Box>
    </Grid>
  );
};
