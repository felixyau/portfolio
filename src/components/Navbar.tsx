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
  Modal,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { createRef, useRef, useState } from "react";
import { GitHub, MailOutline, Menu } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Link, useLocation } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";
import { ModalUnstyled } from "@mui/core";

export const Navbar: React.FC = () => {
  const matches = useMediaQuery("(min-width:800px)");
  const useStyles = makeStyles({
    mobileOnly: {
      display: matches ? "none" : "flex",
    },
    desktopOnly: {
      display: matches ? "flex" : "none",
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
        color: "#000000",
      },
    },
    modal: {
      position: "fixed",
      zIndex: 100,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
    },
    modalItem: {
      backgroundColor: "#FFFFFF",
      width: 400,
    },
  });

  const Backdrop = styled(Box)(() => ({
    zIndex: -1,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
  }));

  const classes = useStyles();
  const ref = useRef(null);
  const route = "Projects"; //later add route
  const [value, setValue] = useState(-1);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  console.log("ref current:", ref.current);

  const handleChange = ({} = {}, newValue: number) => {
    setValue(newValue);
  };
  const url = useLocation().pathname;

  return (
    <Grid container item xs={10} justifyContent="center">
      <Grid
        container
        className={`${classes.container} ${classes.desktopOnly}`}
        item
        sm={4}
        spacing={2}
      >
        <Grid item>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
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
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
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
        xs={4}
        sm={4}
        justifyContent={matches ? "center" : "flex-start"}
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
      <Grid
        className={`${classes.mobileOnly} ${classes.container}`}
        container
        item
        xs={5}
        justifyContent="flex-end"
      >
        <IconButton onClick={() => setOpen(!open)}>
          <Menu />
        </IconButton>
        <ModalUnstyled
          BackdropComponent={Backdrop}
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <Box className={classes.modalItem}>
            <MobileNavbar setOpen={setOpen}/>
          </Box>
        </ModalUnstyled>
      </Grid>
      <Grid
        container
        item
        className={`${classes.container} ${classes.desktopOnly}`}
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
            <IconButton disabled>
              <MailOutline />
            </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
