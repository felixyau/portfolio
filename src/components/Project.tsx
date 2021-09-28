import {
  Grid,
  Card,
  CardMedia,
  Box,
  Typography,
  makeStyles,
  GridJustification,
  Link,
} from "@material-ui/core";
import React from "react";

interface CardsProps {
  hoverTxt: string;
  justify?: GridJustification | undefined;
  url: string;
}

export const Project: React.FC<CardsProps> = ({
  hoverTxt,
  justify = "flex-start",
  url,
  children
}) => {
  const useStyles = makeStyles({
    container: {
      position: "relative",
      backgroundColor: "#fafafa",
      "&:hover": {
        cursor: "pointer",
        "& $hoverText": {
          opacity: 1,
          transform: "translateY(-200%)",
        },
        "& $card": {
          opacity: 0,
        },
      },
    },
    card: {
      width: 310,
      height: 310,
      transition: "opacity 0.5s",
      zIndex: 2,
    },
    hoverText: {
      position: "absolute",
      top: 260,
      right: 30,
      opacity: 0,
      transition: "opacity 0.5s, transform 1s",
      zIndex: 3,
      cursor: "pointer",
      color: "#000000"
    },
  });
  const classes = useStyles();
  return (
    <Grid item container justifyContent="space-evenly" xs={12} md={6} lg={4}>
      <Box m={4}>
      <Link href={url}>
      <Box className={classes.container}>
        <Box className={classes.card}>
          {children}
        </Box>
        <Box className={classes.hoverText}>
          <Typography variant="h6">{hoverTxt}</Typography>
        </Box>
      </Box>
      </Link>
      </Box>
    </Grid>
  );
};
