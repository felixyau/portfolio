import {
  Box,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  Button,
  Tabs,
  Tab,
  Link as MaterialLink,
} from "@material-ui/core";
import React, { createRef, useRef, useState } from "react";
import { GitHub, MailOutline } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const useStyles = makeStyles({
    mobileOnly: {
      display: matches ? "none" : "block",
    },
    container: {
      alignItems: "center",
    },
    buttons: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    texts: {
      color: "#626567",
      textDecoration: "none",
      "&:hover": {
        color: "black",
      },
    },
  });
  const classes = useStyles();
  const ref = useRef(null);
  const route = "Projects"; //later add route
  const [value, setValue] = useState(-1);
  console.log("ref current:", ref.current);

  const handleChange = ({} = {}, newValue: number) => {
    setValue(newValue);
  };
  const url = useLocation().pathname;

  return (
    <Grid container item xs={10} justifyContent="space-between">
      <Grid container className={classes.container} item sm={4} spacing={2}>
        <Grid item>
          <Link style={{ textDecoration: "none", color:"black" }} to="/">
            <Box style={{ borderBottom: url === "/" ? "1px solid" : "" }}>
              <Button className={classes.buttons}>
                <Typography className={classes.texts} variant="overline">
                  Projects
                </Typography>
              </Button>
            </Box>
          </Link>
        </Grid>
        <Grid item>
          <Link style={{ textDecoration: "none", color:"black" }} to="/about">
            <Box style={{ borderBottom: url === "/about" ? "1px solid" : "" }}>
              <Button className={classes.buttons}>
                <Typography className={classes.texts} variant="overline">
                  About
                </Typography>
              </Button>
            </Box>
          </Link>
        </Grid>
      </Grid>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
        
      >
        <Link to="/" style={{ textDecoration: 'none', color:"black" }}><Tab label="Projects" style={{ width:"300px" }}/></Link>
        <Link to="/about" style={{ textDecoration: 'none', color:"black" }}><Tab label="About" /></Link>
      </Tabs> */}
      <Grid
        container
        item
        className={classes.container}
        xs={6}
        sm={4}
        justifyContent="center"
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography
            className={classes.texts}
            variant="overline"
            style={{ fontSize: "1.3rem" }}
          >
            Felix Yau
          </Typography>
        </Link>
      </Grid>
      <Grid className={classes.mobileOnly} container item xs={6}>
        <Typography variant="overline">Mobile NavBar</Typography>
      </Grid>
      <Grid
        container
        item
        className={classes.container}
        sm={4}
        justifyContent="flex-end"
      >
        <Grid item>
          <MaterialLink href="https://github.com/felixyau">
            <IconButton>
              <GitHub />
            </IconButton>
          </MaterialLink>
        </Grid>
        <Grid item>
          <MaterialLink href="https://github.com/felixyau">
            <IconButton>
              <MailOutline />
            </IconButton>
          </MaterialLink>
        </Grid>
      </Grid>
    </Grid>
  );
};
