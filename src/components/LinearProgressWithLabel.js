import React from "react";

import { Box, LinearProgress, Typography } from "@material-ui/core";

export default function LinearProgressWithLabel(props) {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography>{props.label}</Typography>
        </Box>
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </>
  );
}
