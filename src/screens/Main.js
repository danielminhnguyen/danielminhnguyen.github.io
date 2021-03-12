import React, { useEffect, useState } from "react";

import Particles from "react-particles-js";
import classNames from "classnames";
import { motion } from "framer-motion";

// component
import TopNav from "../components/TopNav";

// material UI module
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

// graphics

import Profile from "../assets/images/profile.jpeg";
import Contact from "../components/Contact";
import SocialIcon from "../components/SocialIcon";

import { skills } from "../constants/Skills";
import { projects } from "../constants/Projects";

const useStyles = makeStyles((theme) => ({
  introContainer: {
    position: "absolute",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(25),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(30),
    },
  },
  subtitle: {},
  section1: {
    backgroundColor: "#101010",
    minHeight: 700,
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      minHeight: 400,
    },
  },
  section2: {
    backgroundColor: "#191919",
    minHeight: 600,
    zIndex: 2,
  },
  about: {
    minHeight: 400,
  },
  section3: {
    backgroundColor: "#101010",
    minHeight: 600,
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(5),
  },
  section4: {
    backgroundColor: "#191919",
    minHeight: 600,
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 300,
    paddingRight: 300,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  sectionContainer: {
    maxWidth: 1200,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  particles: {
    zIndex: 1,
  },
  progressBarContainer: {
    maxWidth: 600,
  },
  skillTitle: {
    marginRight: 20,
    fontWeight: 800,
  },
  sectionTitle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  card: {
    position: "relative",
    width: 350,
    height: 500,
    margin: theme.spacing(3),
    transition: "transform .5s ease",
    "&:hover": {
      transition: "transform .5s ease",
      transform: "scale(1.1)",
      border: "2px red solid",
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      width: 250,
      height: 400,
    },
  },
  cardMedia: {
    height: 0,
    paddingTop: "177%", // 16:9,
    objectFit: "cover",
  },
  cardContent: {
    zIndex: 5,
    paddingTop: 260,
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    "& > *": {
      zIndex: 100,
      marginBottom: theme.spacing(2),
    },
  },
  contact: {
    maxWidth: 600,
  },
  footer: {
    backgroundColor: "#101010",
  },
  growth: {
    flexGrow: 1,
  },
  profile: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
      width: 200,
      height: 200,
    },
  },
}));

// Tab Panel sections
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Main() {
  const classes = useStyles();

  const copyrightYear = new Date().getFullYear();
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [expanded, setExpanded] = useState(false);
  const [showLimit, setShowLimit] = useState(6);
  const handleShowClick = () => {
    if (showLimit === 6) {
      setExpanded(true);
      setShowLimit(projects.length);
    } else {
      setExpanded(false);
      setShowLimit(6);
    }
  };

  const [particle, setParticle] = useState(100);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (matches) {
      setParticle(30);
      setShowLimit(2);
    } else {
      setParticle(100);
    }
  }, [matches]);

  return (
    <div>
      <TopNav />
      <div className={classes.section1}>
        <div id="section1" className="anchor" />
        <div className={classes.introContainer}>
          <Typography variant="h1" color="textPrimary">
            Hi, I'm Daniel Nguyen
          </Typography>
          <Typography className={classes.subtitle} variant="h1" color="primary">
            Full Stack Developer
          </Typography>
          <Typography variant="h2" color="textPrimary">
            based in New Zealand.
          </Typography>
        </div>
        <Particles
          className={classes.particles}
          params={{
            particles: {
              number: {
                value: particle,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>

      <div className={classes.section2}>
        <div id="section2" className="anchor" />
        <div>
          <Grid container>
            <Grid item xs={12} md={5} className="row">
              <CardMedia image={Profile} className={classes.profile} />
            </Grid>
            <Grid item xs={12} md={7} className={classes.about}>
              <Typography
                variant="h2"
                color="textPrimary"
                className={classes.sectionTitle}
                align="center"
              >
                About Me
              </Typography>

              <Tabs
                value={tabValue}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Main Skills" {...a11yProps(0)} />
                <Tab label="Certifications" {...a11yProps(1)} />
              </Tabs>

              <TabPanel value={tabValue} index={0}>
                <motion.div animate={{ x: 100 }} />
                <div className={classes.progressBarContainer}>
                  {skills.map((skill) => (
                    <Grid
                      key={skill.name}
                      container
                      display="flex"
                      alignItems="center"
                    >
                      <Grid item xs={4}>
                        <Typography className={classes.skillTitle} variant="h5">
                          {skill.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <LinearProgress
                          color="primary"
                          variant="determinate"
                          value={skill.level}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Typography className={classes.skillTitle} variant="h5">
                  Bachelor of Accounting & Finance - Monash Univerity
                </Typography>
                <Typography className={classes.skillTitle} variant="h5">
                  Full Stack Developer - Mission Ready
                </Typography>
                <Typography className={classes.skillTitle} variant="h5">
                  Advanced Software Developer (On-Going) - Mission Ready
                </Typography>
              </TabPanel>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={classes.section3}>
        <div id="section3" className="anchor" />
        <Typography
          variant="h2"
          color="textPrimary"
          className={classes.sectionTitle}
        >
          My Latest Project
        </Typography>
        <div className="column">
          <Grid
            container
            className={classNames(classes.sectionContainer, "column")}
          >
            {projects.slice(0, showLimit).map((project) => (
              <Grid key={project.title} item xs={12} sm={6} md={6} lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    image={project.background}
                    className={classNames(classes.cardMedia)}
                  />
                  <CardContent
                    className={classNames(
                      classes.cardContent,
                      "column",
                      "darken"
                    )}
                  >
                    <Typography color="textPrimary" variant="h5" component="h2">
                      {project.subtitle}
                    </Typography>
                    <Typography color="textPrimary" variant="h3">
                      {project.title}
                    </Typography>
                    <CardActions>
                      <Button
                        variant="outlined"
                        size="small"
                        href={project.link}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box mt={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleShowClick}
            >
              {expanded ? <>Show Less</> : <>Show More</>}
            </Button>
          </Box>
        </div>
      </div>

      <div className={classes.section4}>
        <div id="section4" className="anchor" />
        <Grid container>
          <Grid item xs={6} className={classes.contact}>
            <Typography
              variant="h2"
              color="textPrimary"
              className={classes.sectionTitle}
            >
              Hire Me
            </Typography>
            <Contact />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </div>

      <div className={classes.footer}>
        <Toolbar>
          <Typography>© {copyrightYear} Daniel Nguyen</Typography>
          <div className={classes.growth} />
          <div className={classes.socialIcon}>
            <SocialIcon />
          </div>
        </Toolbar>
      </div>
    </div>
  );
}
