import React from "react";

import Particles from "react-particles-js";
import classNames from "classnames";
import { motion } from "framer-motion";

// component
import TopNav from "../components/TopNav";

// material UI module
import { makeStyles } from "@material-ui/core/styles";
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
} from "@material-ui/core";

// graphics
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
import Project4 from "../assets/images/project4.png";
import Project5 from "../assets/images/project5.png";
import Contact from "../components/Contact";
import SocialIcon from "../components/SocialIcon";

const useStyles = makeStyles((theme) => ({
  introContainer: {
    position: "absolute",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(25),
  },
  subtitle: {},
  section1: {
    backgroundColor: "#101010",
    height: 700,
    overflow: "hidden",
  },
  section2: {
    backgroundColor: "#191919",
    height: 600,
    zIndex: 2,
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
  },
  projectContainer: {
    maxWidth: 1200,
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
}));

// constant
const skills = [
  {
    name: "Javascript",
    level: 65,
  },
  {
    name: "AI / Photoshop",
    level: 45,
  },
  {
    name: "React/Redux",
    level: 60,
  },
  {
    name: "NodeJs",
    level: 55,
  },
  {
    name: "Python",
    level: 60,
  },
  {
    name: "HTML / CSS",
    level: 70,
  },
  {
    name: "Wordpress",
    level: 65,
  },
];

const projects = [
  {
    background: Project1,
    title: "Tea 88",
    subtitle: "React / NAS Hosting",
    link: "#",
  },
  {
    background: Project2,
    title: "Saigon Kingdom",
    subtitle: "Wordpress",
    link: "#",
  },
  {
    background: Project3,
    title: "Maze Builder",
    subtitle: "Javascript",
    link: "#",
  },
  {
    background: Project4,
    title: "Level Up Works",
    subtitle: "React / NodeJS",
    link: "#",
  },
  {
    background: Project5,
    title: "Turner (Study Project)",
    subtitle: "React / NodeJS",
    link: "#",
  },
];

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
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
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
                value: 100,
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
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Typography
              variant="h2"
              color="textPrimary"
              className={classes.sectionTitle}
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
                  <Grid container display="flex" alignItems="center">
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

      <div className={classes.section3}>
        <div id="section3" className="anchor" />
        <Typography
          variant="h2"
          color="textPrimary"
          className={classes.sectionTitle}
        >
          My Latest Project
        </Typography>
        <div>
          <Grid container className={classNames(classes.projectContainer)}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} lg={4}>
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
                      <Button variant="outlined" size="small">
                        View Details
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
