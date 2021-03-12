import { IconButton } from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function SocialIcon() {
  return (
    <>
      <IconButton href="https://github.com/danielminhnguyen">
        <GitHubIcon />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/danielminhnguyen/">
        <LinkedInIcon />
      </IconButton>
    </>
  );
}
