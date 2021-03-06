import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";

function Footer({ classes }) {
  return (
    <footer className={classes.Footer}>
      <p className={classes.link}>
        Created by <Link to="https://github.com/samueldusek">Samuel Dušek</Link>
        .
      </p>
    </footer>
  );
}

export default withStyles(styles)(Footer);
