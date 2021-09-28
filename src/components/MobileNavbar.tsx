import {
  Grid,
  Typography,
  Link as MaterialLink,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

interface MobileNavbarProps {
  setOpen: (arg0: boolean) => void;
}

const useStyles = makeStyles({
  buttons: {
    color: "#626567",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#000000"
    },
  },
});

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ setOpen }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid container item justifyContent="center">
        <Link style={{ textDecoration: "none" }} to="/">
          <Button className={classes.buttons} onClick={() => setOpen(false)}>
            <Typography align="center" variant="h6">
              Project
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid container item justifyContent="center">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button className={classes.buttons} onClick={() => setOpen(false)}>
            <Typography align="center" variant="h6">
              About
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid container item justifyContent="center">
        <MaterialLink
          href="https://github.com/felixyau"
          style={{textDecoration:"none"}}
        >
          <Button className={classes.buttons}>
            <Typography align="center" variant="h6">
              Github
            </Typography>
          </Button>
        </MaterialLink>
      </Grid>
    </Grid>
  );
};
