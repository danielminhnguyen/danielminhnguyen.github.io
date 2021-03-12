import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  nameEmail: {
    [theme.breakpoints.down("sm")]: { width: 300 },
    [theme.breakpoints.up("sm")]: { width: 400 },
    marginBottom: 30,
  },
  message: {
    [theme.breakpoints.down("sm")]: { width: 300 },
    [theme.breakpoints.up("sm")]: { width: 400 },
    marginBottom: 30,
  },
  contact: {
    "& a": {
      color: "white",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [submit, setSubmit] = useState("submit");

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const handleChangeEmail = (e) => {
    // console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      setEmail(e.target.value);
      setEmailError(true);
      if (e.target.value === "") {
        // check if the input is empty
        setEmailError(false);
      }
    } else {
      setEmail(e.target.value);
      setEmailError(false);
    }
  };

  const formSubmit = async (e) => {
    // console.log(USER_ID);
    e.preventDefault();
    if (!emailError) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setSubmit("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  return (
    <>
      <form className={classes.form} onSubmit={formSubmit}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
          className={classes.contact}
        >
          I am available for freelance work. Connect me via phone
          <a href="tel:+61272796868"> +61 27 279 6868</a> or email:
          <a href="mailto:minhnguyen68@hotmail.com">
            {" "}
            minhnguyen68@hotmail.com
          </a>{" "}
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Alternatively, you can just drop me a message on the below form and
          I'll get back to you as soon as possible.
        </Typography>
        <Box mt={3}>
          <TextField
            className={classes.nameEmail}
            name="name"
            value={name}
            variant="outlined"
            placeholder="Your name *"
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
          ></TextField>
          <TextField
            name="email"
            error={emailError}
            className={classes.nameEmail}
            value={email}
            variant="outlined"
            placeholder="Your Email *"
            onChange={(e) => handleChangeEmail(e)}
            required
            type="text"
          ></TextField>
          <TextField
            name="message"
            className={classes.message}
            value={message}
            variant="outlined"
            placeholder="Message"
            multiline
            onChange={(e) => setMessage(e.target.value)}
            rows={10}
            required
            type="text"
          ></TextField>
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              {submit}
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
}
