import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import Scrollspy from "react-scrollspy";
import classNames from "classnames";

import MenuIcon from "@material-ui/icons/Menu";
import SocialIcon from "./SocialIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "red",
    },
  },
  growth: {
    flexGrow: 1,
  },
  appBarTransparent: {
    backgroundColor: "#101010",
  },
  appBarSolid: {
    backgroundColor: "#191919",
  },
  active: {
    borderBottom: "solid 2px red",
    transition: "0.5s ease",
  },
  socialIcon: {
    marginRight: theme.spacing(2),
  },
}));

export default function TopNav() {
  const classes = useStyles();
  const navRef = React.useRef();
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        className={classNames(classes[navRef.current], classes.appBar)}
        currentClassName="is-active"
        color="transparent"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Scrollspy
            items={["section1", "section2", "section3", "section4"]}
            className="row"
            currentClassName="activeNav"
            // offset={-50}
          >
            <Typography
              component="a"
              href="#section1"
              variant="h6"
              className={classes.title}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="#section2"
              variant="h6"
              className={classes.title}
            >
              About
            </Typography>
            <Typography
              component="a"
              href="#section3"
              variant="h6"
              className={classes.title}
            >
              Porffolio
            </Typography>
            <Typography
              component="a"
              href="#section4"
              variant="h6"
              className={classes.title}
            >
              Contact
            </Typography>
          </Scrollspy>
          <div className={classes.growth}></div>
          <div className={classes.socialIcon}>
            <SocialIcon />
          </div>
          <Button variant="contained" color="primary">
            Get in Touch
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
