import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mobileItem: {
    color: "black",
    marginBottom: theme.spacing(5),
  },
}));

const variants = {
  open: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item, toggle }) => {
  const classes = useStyles();
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={classes.mobileItem}
    >
      <Typography component="a" variant="h1" href={item.link} onClick={toggle}>
        {item.title}
      </Typography>
    </motion.li>
  );
};
