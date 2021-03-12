import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNavigation = ({ toggle }) => (
  <motion.ul variants={variants} style={{ position: "absolute" }}>
    {itemIds.map((item) => (
      <MenuItem toggle={toggle} item={item} key={item.title} />
    ))}
  </motion.ul>
);

const itemIds = [
  { title: "Home", link: "#section1" },
  { title: "About", link: "#section2" },
  { title: "Porfolio", link: "#section3" },
  { title: "Contact", link: "#section4" },
];
