import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NavbarStyles";

function Navbar({ classes }) {
  return (
    <div className={classes.Navbar}>
      <h2 className={classes.heading}>📚 Book Store</h2>
      <p className={classes.link}>HOME</p>
    </div>
  );
}

export default withStyles(styles)(Navbar);
