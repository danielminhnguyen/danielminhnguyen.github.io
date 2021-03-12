import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import Scrollspy from "react-scrollspy";
import classNames from "classnames";
import { motion, useCycle } from "framer-motion";

// import MenuIcon from "@material-ui/icons/Menu";
import SocialIcon from "./SocialIcon";
import { MobileNavigation } from "./Motion/MobileNav";
import { MenuToggle } from "./Motion/MenuToggle";

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
  mobileHide: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobileBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    height: "100vh",
    width: "300px",
    background: "#fff",
  },
  mobileNav: {
    position: "absolute",
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

// motion settings
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 27px 28px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 27px 28px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function TopNav() {
  const classes = useStyles();
  const navRef = React.useRef();
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  navRef.current = navBackground;

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

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
        // currentClassName="is-active"
        color="transparent"
      >
        <Toolbar>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className={classes.mobile}
            ref={containerRef}
          >
            <motion.div
              className={classes.mobileBackground}
              variants={sidebar}
            />
            <MobileNavigation
              className={classes.mobileNav}
              toggle={() => toggleOpen()}
            />
            <MenuToggle
              // className={classes.mobileToggle}
              toggle={() => toggleOpen()}
            />
          </motion.nav>
          <Scrollspy
            items={["section1", "section2", "section3", "section4"]}
            className={classNames("row", classes.mobileHide)}
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
          <Button
            variant="contained"
            color="primary"
            className={classes.mobileHide}
            href="#section4"
          >
            Get in Touch
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
