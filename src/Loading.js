import React from "react";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/LoadingStyles";

function Loading({ classes }) {
  return (
    <div className={classes.Loading}>
      {/* <span>Loading.. 🔄</span> */}
      <span className={classes.loader}></span>
    </div>
  );
}

export default withStyles(styles)(Loading);
