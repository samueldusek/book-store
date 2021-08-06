import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NavbarStyles";

function Navbar({ classes }) {
  return (
    <div className={classes.Navbar}>
      <h2 className={classes.heading}>📚 Book Store</h2>
      <Link to="/" className={classes.link}>
        HOME
      </Link>
    </div>
  );
}

export default withStyles(styles)(Navbar);
