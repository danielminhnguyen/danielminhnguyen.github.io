import { IconButton } from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function SocialIcon() {
  return (
    <>
      <IconButton>
        <GitHubIcon />
      </IconButton>
      <IconButton>
        <LinkedInIcon />
      </IconButton>
    </>
  );
}
