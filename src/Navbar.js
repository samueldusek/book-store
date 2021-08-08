import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NavbarStyles";

function Navbar({ classes }) {
  return (
    <nav className={classes.Navbar}>
      <h2 className={classes.heading}>
        <Link to="/">📚 Book Store</Link>
      </h2>
      <Link to="/" className={classes.link}>
        HOME
      </Link>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
