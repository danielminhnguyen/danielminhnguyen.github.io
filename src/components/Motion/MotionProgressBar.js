import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import { IntersectionContext } from "./intersection-observer";

const useStyles = makeStyles((theme) => ({
  bar: {
    overflow: "hidden",
    position: "relative",
    borderRadius: 10,
  },
  barFilling: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

export const MotionProgressBar = ({
  percents,
  caption,
  duration = 3,
  delay = 0.5,
  easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
  barWidth = 300,
  barHeight = 24,
  progressColor = "#F9004D",
  baseColor = "#7C0026",
}) => {
  const classes = useStyles();

  const { inView } = useContext(IntersectionContext);

  const percentsOffset = (percents - 100) * (barWidth / 100);

  const transition = {
    duration: duration,
    delay: delay,
    ease: easing,
  };

  const variantsBarFill = {
    enter: {
      opacity: 0,
      x: -barWidth,
    },
    animate: {
      opacity: 1,
      x: [-barWidth, percentsOffset],
      transition,
    },
  };

  return (
    <div my={1}>
      <div
        style={{
          width: barWidth,
          height: barHeight,
          backgroundColor: baseColor,
        }}
        className={classes.bar}
        // width={barWidth}
        // height={barHeight}
        bg={baseColor}
      >
        <motion.div
          className={classes.barFilling}
          style={{ backgroundColor: progressColor }}
          variants={variantsBarFill}
          initial="enter"
          animate={inView ? "animate" : "enter"}
          exit="enter"
          bg={progressColor}
        />

        {caption && (
          <div
            fontSize={barHeight >= 20 ? 2 : "8px"}
            lineHeight={`${barHeight}px`}
          >
            {caption}
          </div>
        )}
      </div>
      {/* <div>{percents}%</div> */}
    </div>
  );
};
